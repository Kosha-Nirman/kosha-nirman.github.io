"use client";

// Press-travel keycap interaction (physical key binding, mechanical click
// SFX) inspired by jh3y's "Interactive Keypad with Key Recorder + SFX" —
// https://codepen.io/jh3y/pen/WbQNxXb
// Keycap and base plate artwork are the user-supplied renders, recolored
// to the brand palette via CSS filters; audio is synthesized with the
// Web Audio API, no third-party audio assets.

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface KeyDef {
	id: "r" | "t" | "n";
	pitch: number;
	wide?: boolean;
	/* position on the keypad stage, in % of the stage's own box (bottom-anchored) */
	socket: { left: number; bottom: number; width: number; height: number };
}

/* The stage is taller than the plate itself (see aspect-[400/310] below,
   vs. the plate art's own ~1.51 ratio) so keys have headroom to sit above
   the plate's top edge. Positions are bottom-anchored, matching how the
   reference keypad lays its 3 keys out on that same oversized stage:
   two singles (one further back/left, one lower/right) plus a wide key
   in front-left. Render order puts "t" last so it paints on top. */
const KEYS: KeyDef[] = [
	{ id: "r", pitch: 2600, socket: { left: 29.3, bottom: 54.2, width: 40.5, height: 46 } },
	{ id: "n", pitch: 2200, socket: { left: 54, bottom: 36, width: 40.5, height: 46 } },
	{
		id: "t",
		pitch: 3000,
		wide: true,
		socket: { left: 6, bottom: 17.85, width: 64, height: 65 },
	},
];

/* ─── synthesized mechanical click (no audio assets needed) ────────── */
function createNoiseBuffer(ctx: AudioContext, duration: number) {
	const size = Math.max(1, Math.floor(ctx.sampleRate * duration));
	const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < size; i++) {
		data[i] = (Math.random() * 2 - 1) * (1 - i / size) ** 2;
	}
	return buffer;
}

function playClick(ctx: AudioContext, basePitch: number) {
	const now = ctx.currentTime;
	const jitter = 0.9 + Math.random() * 0.2;

	// tactile "clack" — short filtered noise burst
	const noise = ctx.createBufferSource();
	noise.buffer = createNoiseBuffer(ctx, 0.045);
	const bandpass = ctx.createBiquadFilter();
	bandpass.type = "bandpass";
	bandpass.frequency.value = basePitch * jitter;
	bandpass.Q.value = 1.1;
	const noiseGain = ctx.createGain();
	noiseGain.gain.setValueAtTime(0.5, now);
	noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
	noise.connect(bandpass).connect(noiseGain).connect(ctx.destination);
	noise.start(now);
	noise.stop(now + 0.05);

	// low "thock" body
	const osc = ctx.createOscillator();
	osc.type = "sine";
	osc.frequency.setValueAtTime(basePitch * 0.35, now);
	osc.frequency.exponentialRampToValueAtTime(basePitch * 0.18, now + 0.04);
	const oscGain = ctx.createGain();
	oscGain.gain.setValueAtTime(0.32, now);
	oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
	osc.connect(oscGain).connect(ctx.destination);
	osc.start(now);
	osc.stop(now + 0.07);
}

function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;
	return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

/* ─── keycap button, positioned in its socket on the base plate ────── */
function Keycap({
	keyDef,
	pressed,
	onPress,
	onRelease,
}: {
	keyDef: KeyDef;
	pressed: boolean;
	onPress: () => void;
	onRelease: () => void;
}) {
	const { left, bottom, width, height } = keyDef.socket;
	return (
		<button
			type="button"
			aria-label={`Key ${keyDef.id}`}
			data-pressed={pressed || undefined}
			className="mech-key mech-key--socketed"
			style={{ left: `${left}%`, bottom: `${bottom}%`, width: `${width}%`, height: `${height}%` }}
			onPointerDown={onPress}
			onPointerUp={onRelease}
			onPointerLeave={onRelease}
			onPointerCancel={onRelease}
			onKeyDown={(event) => {
				if (event.key !== "Enter" && event.key !== " ") return;
				event.preventDefault();
				if (event.repeat) return;
				onPress();
			}}
			onKeyUp={(event) => {
				if (event.key !== "Enter" && event.key !== " ") return;
				onRelease();
			}}
		>
			<span className="mech-key__well" aria-hidden="true" />
			<span className={`mech-key__clip${keyDef.wide ? " mech-key__clip--wide" : ""}`}>
				<span className={`mech-key__cap${keyDef.wide ? " mech-key__cap--light" : ""}`}>
					<Image
						src={keyDef.wide ? "/keypad-double.webp" : "/keypad-single.webp"}
						alt=""
						width={keyDef.wide ? 596 : 369}
						height={keyDef.wide ? 463 : 331}
						sizes="200px"
						className="mech-key__img"
						priority
					/>
					<span
						className={`mech-key__label${keyDef.wide ? " mech-key__label--dark" : ""}`}
						aria-hidden="true"
					>
						{keyDef.id.toUpperCase()}
					</span>
				</span>
			</span>
		</button>
	);
}

export function MechanicalKeys() {
	const [pressed, setPressed] = useState<Record<KeyDef["id"], boolean>>({
		r: false,
		t: false,
		n: false,
	});
	const audioCtxRef = useRef<AudioContext | null>(null);

	const handlePress = useCallback((key: KeyDef) => {
		setPressed((prev) => (prev[key.id] ? prev : { ...prev, [key.id]: true }));

		if (!audioCtxRef.current) {
			audioCtxRef.current = new AudioContext();
		}
		const ctx = audioCtxRef.current;
		if (ctx.state === "suspended") ctx.resume();
		playClick(ctx, key.pitch);
	}, []);

	const handleRelease = useCallback((key: KeyDef) => {
		setPressed((prev) => (prev[key.id] ? { ...prev, [key.id]: false } : prev));
	}, []);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
			if (isTypingTarget(event.target)) return;
			const key = KEYS.find((k) => k.id === event.key.toLowerCase());
			if (key) handlePress(key);
		};
		const onKeyUp = (event: KeyboardEvent) => {
			const key = KEYS.find((k) => k.id === event.key.toLowerCase());
			if (key) handleRelease(key);
		};

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, [handlePress, handleRelease]);

	return (
		<div className="keypad-stage w-full max-w-sm mx-auto select-none">
			<div className="keypad-plate relative w-full aspect-[400/310]">
				<Image
					src="/keypad-base.webp"
					alt=""
					width={951}
					height={629}
					sizes="420px"
					className="absolute bottom-0 left-0 w-full h-auto drop-shadow-xl drop-shadow-amber-900/15"
					priority
				/>
				{KEYS.map((key) => (
					<Keycap
						key={key.id}
						keyDef={key}
						pressed={pressed[key.id]}
						onPress={() => handlePress(key)}
						onRelease={() => handleRelease(key)}
					/>
				))}
			</div>

			<p className="mt-6 text-center font-pixel text-[9px] uppercase tracking-widest text-gray-400">
				Click, or press R · T · N
			</p>
		</div>
	);
}
