"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BookIcon, CodeIcon, GitHubIcon, GlobeIcon, ToolsIcon } from "@/components/icons/Icons";
import { DATA } from "@/data/data";

/* ─── animation helpers ─────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const inView = (delay = 0) => ({
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-40px" },
	transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── static data ───────────────────────────────────────────────────── */
const cards = [
	{
		num: "01",
		badge: "Open Source",
		title: "Contributors",
		desc: "Join our community of developers building impactful tools. Contribute code, documentation, or ideas to projects that enhance productivity worldwide.",
		link: "Start Contributing",
		dot: "bg-emerald-400",
	},
	{
		num: "02",
		badge: "Leadership",
		title: "Maintainers",
		desc: "Take ownership of projects and help guide their development. Lead initiatives, mentor contributors, and shape the future of our ecosystem.",
		link: "Learn More",
		dot: "bg-green-600",
	},
	{
		num: "03",
		badge: "Community",
		title: "Community Builders",
		desc: "Help grow our community by creating content, organizing events, and connecting developers. Share knowledge across our ecosystem.",
		link: "Get Involved",
		dot: "bg-teal-500",
	},
	{
		num: "04",
		badge: "Documentation",
		title: "Technical Writers",
		desc: "Craft comprehensive guides and documentation that help developers understand and use our tools. Make complex concepts accessible to everyone.",
		link: "Start Writing",
		dot: "bg-emerald-500",
	},
];

const features = [
	{ Icon: CodeIcon, title: "Open Source", desc: "Fully transparent, open, and community-auditable by default" },
	{ Icon: ToolsIcon, title: "Developer Tools", desc: "Utilities built to eliminate friction in every workflow" },
	{ Icon: GlobeIcon, title: "Community Driven", desc: "Every contributor shapes the direction of the project" },
	{ Icon: BookIcon, title: "Documentation", desc: "Guides that make complex ideas accessible to everyone" },
];

const ticker = ["100% Open Source", "Community Driven", "Developer First", "Zero Barriers", "Build Deeper", "Impact Stronger"];

const stats = [
	{ value: "100%", label: "Open Source" },
	{ value: "∞", label: "Layers Deep" },
	{ value: "0", label: "Barriers" },
];

/* ─── layer stack visual ────────────────────────────────────────────── */
const layers = [
	{ icon: CodeIcon,  label: "Open Source",     sub: "MIT Licensed",      color: "bg-emerald-50 border-emerald-100",  dot: "bg-emerald-400"  },
	{ icon: ToolsIcon, label: "Developer Tools",  sub: "Zero Friction",     color: "bg-green-50   border-green-100",    dot: "bg-green-500"    },
	{ icon: GlobeIcon, label: "Community Driven", sub: "Built Together",    color: "bg-teal-50    border-teal-100",     dot: "bg-teal-500"     },
	{ icon: BookIcon,  label: "Documentation",    sub: "Always Current",    color: "bg-emerald-50 border-emerald-100",  dot: "bg-emerald-600"  },
];

// pos 0 = front (bottom of stack), pos N-1 = back (top, most hidden)
const STACK_CONFIG = [
	{ y: 0,   scale: 1,    opacity: 1,    zIndex: 4, shadow: "shadow-lg"  },
	{ y: -16, scale: 0.96, opacity: 0.75, zIndex: 3, shadow: "shadow-md"  },
	{ y: -30, scale: 0.92, opacity: 0.5,  zIndex: 2, shadow: "shadow-sm"  },
	{ y: -42, scale: 0.88, opacity: 0.3,  zIndex: 1, shadow: "shadow-none" },
];

function LayerStack() {
	const [front, setFront] = useState(0);
	const n = layers.length;

	useEffect(() => {
		const id = setInterval(() => setFront((f) => (f + 1) % n), 2000);
		return () => clearInterval(id);
	}, [n]);

	return (
		<div className="relative w-full max-w-sm mx-auto" style={{ height: 130, overflow: "visible" }}>
			{layers.map((layer, i) => {
				// how far back is this card from the current front?
				const pos = (i - front + n) % n;
				const cfg = STACK_CONFIG[pos];
				return (
					<motion.div
						key={layer.label}
						className={`absolute left-0 right-0 flex items-center gap-4 px-5 py-4 rounded-xl border-2 bg-white ${cfg.shadow} ${layer.color}`}
						style={{ top: 42 }} // base y so back-cards peek above
						animate={{
							y:       cfg.y,
							scale:   cfg.scale,
							opacity: cfg.opacity,
							zIndex:  cfg.zIndex,
						}}
						transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
					>
						<div className={`w-10 h-10 rounded-lg ${layer.color} border flex items-center justify-center shrink-0`}>
							<layer.icon className="w-5 h-5 text-gray-700" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="font-semibold text-gray-900 text-sm leading-tight">{layer.label}</div>
							<div className="text-gray-400 text-xs mt-0.5">{layer.sub}</div>
						</div>
						<div className="flex items-center gap-1.5 shrink-0">
							<span className={`w-2 h-2 rounded-full ${layer.dot}`} />
							<span className="font-pixel text-[9px] text-gray-400 uppercase tracking-widest">Active</span>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}

/* ─── code terminal ─────────────────────────────────────────────────── */
function CodeTerminal() {
	const lines = [
		{ indent: 0, tokens: [{ text: "while", color: "text-teal-400" }, { text: " {", color: "text-gray-400" }] },
		{ indent: 4, tokens: [{ text: "build", color: "text-green-400" }, { text: "()", color: "text-gray-400" }] },
		{ indent: 0, tokens: [{ text: "}", color: "text-gray-400" }] },
		{
			indent: 0,
			tokens: [
				{ text: "create", color: "text-emerald-400" },
				{ text: "(", color: "text-gray-400" },
				{ text: "layers", color: "text-emerald-300" },
				{ text: ")", color: "text-gray-400" },
			],
		},
	];

	return (
		<div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-950 w-full max-w-sm text-left shadow-2xl">
			{/* Chrome bar */}
			<div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-gray-800">
				<span className="w-3 h-3 rounded-full bg-red-500/80" />
				<span className="w-3 h-3 rounded-full bg-yellow-500/80" />
				<span className="w-3 h-3 rounded-full bg-emerald-500/80" />
				<span className="ml-auto font-pixel text-[10px] text-gray-500 tracking-wider">kosha.sh</span>
			</div>
			{/* Lines */}
			<div className="p-5 space-y-2">
				{lines.map((line, i) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: static ordered lines
						key={i}
						className="flex items-center"
						initial={{ opacity: 0, x: -8 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.2 + i * 0.18 }}
					>
						<span className="text-gray-700 font-mono text-sm mr-4 w-4 shrink-0 text-right">{i + 1}</span>
						<span style={{ paddingLeft: `${line.indent * 0.5}rem` }} className="font-mono text-sm">
							{line.tokens.map((t, j) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: static token list
								<span key={j} className={t.color}>
									{t.text}
								</span>
							))}
						</span>
					</motion.div>
				))}
				{/* Cursor */}
				<motion.div
					className="flex items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 1.1 }}
				>
					<span className="text-gray-700 font-mono text-sm mr-4 w-4 shrink-0 text-right">5</span>
					<span className="inline-flex items-center gap-1">
						<span className="text-emerald-500 font-mono text-sm">$</span>
						<span className="w-2 h-4 bg-emerald-500/80 animate-cursor-blink" />
					</span>
				</motion.div>
			</div>
		</div>
	);
}

/* ─── page ─────────────────────────────────────────────────────────── */
export default function Home() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="min-h-screen bg-white text-gray-900">

			{/* ── NAV ───────────────────────────────────────────────────────── */}
			<motion.nav
				className="sticky top-0 z-50 w-full bg-white border-b border-gray-200"
				initial={{ y: -64, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
			>
				<div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
					<div className="flex items-center gap-3 cursor-pointer">
						<Image src="/logo.svg" alt={DATA.name} width={36} height={36} className="w-9 h-9" />
						<div className="leading-none">
							<span className="font-bold text-[16px] text-gray-900 block tracking-tight">{DATA.name}</span>
							<span className="font-pixel text-[9px] text-emerald-600 tracking-widest uppercase">{DATA.subtitle}</span>
						</div>
					</div>

					<div className="hidden md:flex items-center gap-8">
						<a href="#contribute" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
							Contribute
						</a>
						<a href="#projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
							Projects
						</a>
						<a
							href={DATA.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-colors"
						>
							<GitHubIcon className="w-4 h-4" /> GitHub
						</a>
					</div>
				</div>
			</motion.nav>

			{/* ── HERO ──────────────────────────────────────────────────────── */}
			<section className="bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 py-14 md:py-28 flex flex-col md:flex-row items-center gap-10 md:gap-16">

					{/* Left copy */}
					<div className="w-full md:flex-1 md:max-w-xl">
						<motion.div
							className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6 md:mb-8"
							{...fadeUp(0.1)}
						>
							<span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
							<span className="font-pixel text-[10px] uppercase tracking-widest text-emerald-700">
								The Creation of Layers
							</span>
						</motion.div>

						<motion.h1
							className="font-bold text-gray-900 leading-[1.08] tracking-tight mb-5 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
							{...fadeUp(0.2)}
						>
							Build Deeper.{" "}
							<span className="text-emerald-600 block">Impact Stronger.</span>
						</motion.h1>

						<motion.p
							className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed"
							{...fadeUp(0.35)}
						>
							Kosha Nirman crafts open-source tools and systems with depth — every layer
							contributes to meaningful solutions that empower developers and businesses.
						</motion.p>

						<motion.div className="flex gap-3 flex-wrap" {...fadeUp(0.45)}>
							<a
								href="#projects"
								className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-colors inline-block"
							>
								Explore Projects
							</a>
							<a
								href="#contribute"
								className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-colors inline-block"
							>
								Contribute →
							</a>
						</motion.div>

						{/* Stats row */}
						<motion.div className="flex gap-8 mt-12 pt-10 border-t border-gray-100" {...fadeUp(0.55)}>
							{stats.map((s) => (
								<div key={s.label}>
									<div className="font-bold text-2xl text-gray-900">{s.value}</div>
									<div className="text-sm text-gray-400 font-medium mt-0.5">{s.label}</div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Right — layer stack */}
					<motion.div className="w-full md:flex-1 flex justify-center md:justify-end" {...fadeUp(0.3)}>
						<LayerStack />
					</motion.div>

				</div>
			</section>

			{/* ── TICKER ────────────────────────────────────────────────────── */}
			<div className="bg-emerald-600 py-3 overflow-hidden">
				<motion.div
					className="flex gap-12 whitespace-nowrap"
					animate={{ x: ["0%", "-50%"] }}
					transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				>
					{[...ticker, ...ticker].map((item, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: duplicated ticker
						<span key={i} className="font-pixel text-[10px] uppercase tracking-widest text-emerald-100 shrink-0">
							{item}
							<span className="mx-6 text-emerald-300/60">·</span>
						</span>
					))}
				</motion.div>
			</div>

			{/* ── JOIN THE MOVEMENT ─────────────────────────────────────────── */}
			<section id="contribute" className="py-20 px-6 bg-[#f0f2f5]">
				<div className="max-w-6xl mx-auto">
					<motion.div className="mb-12" {...inView(0)}>
						<span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
							Community
						</span>
						<h2 className="font-bold text-gray-900 text-3xl md:text-5xl tracking-tight">
							Join the Movement
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{cards.map((card, i) => (
							<motion.a
								key={card.title}
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="group relative rounded-xl p-7 border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200 block overflow-hidden"
								{...inView(i * 0.07)}
							>
								{/* Number watermark */}
								<span className="absolute top-4 right-6 font-pixel text-5xl text-gray-100 select-none">
									{card.num}
								</span>

								<div className="relative">
									<div className="flex items-center gap-2 mb-4">
										<span className={`w-2 h-2 rounded-full ${card.dot} shrink-0`} />
										<span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
											{card.badge}
										</span>
									</div>

									<h3 className="font-bold text-gray-900 text-2xl mb-3 tracking-tight">{card.title}</h3>
									<p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>

									<span className="inline-flex items-center gap-1.5 font-semibold text-sm text-emerald-600 group-hover:gap-3 transition-all duration-200">
										{card.link}
										<span className="transition-transform group-hover:translate-x-1">→</span>
									</span>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* ── FEATURES ──────────────────────────────────────────────────── */}
			<section id="projects" className="py-20 px-6 bg-white border-y border-gray-100">
				<div className="max-w-6xl mx-auto">
					<motion.div className="mb-14" {...inView(0)}>
						<span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
							What We Build
						</span>
						<h2 className="font-bold text-gray-900 text-3xl md:text-5xl tracking-tight leading-tight">
							Building technology with depth,{" "}
							<span className="text-emerald-600">one layer at a time.</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
						{features.map((feat, i) => (
							<motion.div
								key={feat.title}
								className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200"
								{...inView(i * 0.08)}
							>
								<div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
									<feat.Icon className="w-5 h-5 text-emerald-600" />
								</div>
								<h4 className="font-bold text-gray-900 mb-2 text-[15px]">{feat.title}</h4>
								<p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA STRIP ─────────────────────────────────────────────────── */}
			<section className="bg-emerald-600 py-20 px-6">
				<motion.div className="max-w-4xl mx-auto text-center" {...inView(0)}>
					<span className="font-pixel text-[10px] uppercase tracking-widest text-emerald-200 mb-4 block">
						Open Source
					</span>
					<h2 className="font-bold text-white text-3xl md:text-5xl tracking-tight mb-5 leading-tight">
						Every great project starts with a single layer.
					</h2>
					<p className="text-emerald-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
						Join hundreds of developers building tools that matter. No gatekeeping, no barriers —
						just meaningful open-source contributions.
					</p>
					<a
						href={DATA.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-emerald-700 px-8 py-4 rounded-lg font-bold text-[15px] transition-colors shadow-lg"
					>
						<GitHubIcon className="w-4 h-4" />
						View on GitHub
					</a>
				</motion.div>
			</section>

			{/* ── FOOTER ────────────────────────────────────────────────────── */}
			<footer className="bg-gray-950 py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row gap-12 mb-16">

						{/* Brand */}
						<div className="flex-1 max-w-sm">
							<div className="flex items-center gap-3 mb-5">
								<Image src="/logo.svg" alt={DATA.name} width={36} height={36} className="w-9 h-9" />
								<div>
									<span className="font-bold text-white text-[16px] block">{DATA.name}</span>
									<span className="font-pixel text-[9px] text-emerald-500 uppercase tracking-widest">{DATA.subtitle}</span>
								</div>
							</div>
							<p className="text-gray-500 text-sm leading-relaxed mb-6">
								Technology evolves through layers, each one building meaningful solutions for developers worldwide.
							</p>
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
							>
								<GitHubIcon className="w-4 h-4" />
								Start Contributing
							</a>
						</div>

						{/* Terminal */}
						<div className="flex-1 flex justify-end">
							<CodeTerminal />
						</div>
					</div>

					<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="font-pixel text-[10px] text-gray-700 uppercase tracking-widest">
							© {currentYear} Kosha Nirman — All rights reserved
						</p>
						<div className="flex gap-6">
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs text-gray-600 hover:text-emerald-500 transition-colors font-medium tracking-wide"
							>
								GitHub
							</a>
							<a
								href={DATA.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs text-gray-600 hover:text-emerald-500 transition-colors font-medium tracking-wide"
							>
								Website
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
