"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookIcon, CodeIcon, GitHubIcon, GlobeIcon, ToolsIcon } from "@/components/icons/Icons";
import { DATA } from "@/data/data";

/* ─── tiny helpers ─────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 28 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const inView = (delay = 0) => ({
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-60px" },
	transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── static data ───────────────────────────────────────────────────── */
const cards = [
	{
		num: "01",
		badge: "Open Source",
		title: "Contributors",
		desc: "Join our community of developers building impactful tools. Contribute code, documentation, or ideas to projects that enhance productivity worldwide.",
		link: "Start Contributing",
		accent: "#f97316",
		accentBg: "bg-orange-500",
		accentText: "text-orange-500",
		accentBorder: "hover:border-orange-400/60",
		accentShadow: "hover:shadow-orange-500/10",
	},
	{
		num: "02",
		badge: "Leadership",
		title: "Maintainers",
		desc: "Take ownership of projects and help guide their development. Lead initiatives, mentor contributors, and shape the future of our ecosystem.",
		link: "Learn More",
		accent: "#6b7280",
		accentBg: "bg-gray-500",
		accentText: "text-gray-400",
		accentBorder: "hover:border-gray-400/40",
		accentShadow: "hover:shadow-gray-500/10",
	},
	{
		num: "03",
		badge: "Community",
		title: "Community Builders",
		desc: "Help grow our community by creating content, organizing events, and connecting developers. Share knowledge across our ecosystem.",
		link: "Get Involved",
		accent: "#a855f7",
		accentBg: "bg-purple-500",
		accentText: "text-purple-400",
		accentBorder: "hover:border-purple-400/60",
		accentShadow: "hover:shadow-purple-500/10",
	},
	{
		num: "04",
		badge: "Documentation",
		title: "Technical Writers",
		desc: "Craft comprehensive guides and documentation that help developers understand and use our tools. Make complex concepts accessible to everyone.",
		link: "Start Writing",
		accent: "#10b981",
		accentBg: "bg-emerald-500",
		accentText: "text-emerald-400",
		accentBorder: "hover:border-emerald-400/60",
		accentShadow: "hover:shadow-emerald-500/10",
	},
];

const features = [
	{ Icon: CodeIcon, title: "Open Source", desc: "Fully transparent, open, and community-auditable by default" },
	{ Icon: ToolsIcon, title: "Developer Tools", desc: "Utilities built to eliminate friction in every workflow" },
	{ Icon: GlobeIcon, title: "Community Driven", desc: "Every contributor shapes the direction of the project" },
	{ Icon: BookIcon, title: "Documentation", desc: "Guides that make complex ideas accessible to everyone" },
];

const ticker = ["100% Open Source", "Community Driven", "Developer First", "Zero Barriers", "Build Deeper", "Impact Stronger"];

/* ─── custom code terminal ─────────────────────────────────────────── */
function CodeTerminal() {
	const lines = [
		{ indent: 0, tokens: [{ text: "while", color: "text-purple-400" }, { text: " {", color: "text-gray-300" }] },
		{ indent: 4, tokens: [{ text: "build", color: "text-blue-400" }, { text: "()", color: "text-gray-300" }] },
		{ indent: 0, tokens: [{ text: "}", color: "text-gray-300" }] },
		{
			indent: 0,
			tokens: [
				{ text: "create", color: "text-emerald-400" },
				{ text: "(", color: "text-gray-300" },
				{ text: "layers", color: "text-amber-300" },
				{ text: ")", color: "text-gray-300" },
			],
		},
	];

	return (
		<motion.div
			className="rounded-xl overflow-hidden border border-white/8 bg-gray-950 w-full max-w-xs mx-auto text-left shadow-2xl shadow-black/60"
			{...inView(0)}
		>
			{/* Chrome bar */}
			<div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900/80 border-b border-white/5">
				<span className="w-3 h-3 rounded-full bg-red-500/80" />
				<span className="w-3 h-3 rounded-full bg-yellow-500/80" />
				<span className="w-3 h-3 rounded-full bg-emerald-500/80" />
				<span className="ml-auto font-mono text-[10px] text-gray-600 tracking-wider">kosha.sh</span>
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
				{/* Cursor line */}
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
		</motion.div>
	);
}

/* ─── page ─────────────────────────────────────────────────────────── */
export default function Home() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="min-h-screen">
			{/* ── NAV ───────────────────────────────────────────────────────── */}
			<motion.nav
				className="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-xl border-b border-white/5"
				initial={{ y: -72, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
			>
				<div className="flex justify-between items-center px-6 py-3.5 max-w-7xl mx-auto">
					<motion.div
						className="flex items-center gap-2.5 cursor-pointer"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 400, damping: 20 }}
					>
						<Image src="/logo.svg" alt={DATA.name} width={32} height={32} className="w-8 h-8" />
						<div className="leading-none">
							<span className="font-mono font-semibold text-[15px] text-white block tracking-tight">{DATA.name}</span>
							<span className="font-mono text-[10px] text-emerald-500 tracking-wider">{DATA.subtitle}</span>
						</div>
					</motion.div>

					<div className="hidden md:flex items-center gap-6">
						<a href="#contribute" className="font-mono text-sm text-gray-500 hover:text-gray-200 transition-colors">
							Contribute
						</a>
						<a href="#projects" className="font-mono text-sm text-gray-500 hover:text-gray-200 transition-colors">
							Projects
						</a>
						<motion.a
							href={DATA.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-mono font-medium inline-flex items-center gap-2 shadow-lg shadow-emerald-900/40"
							whileHover={{ scale: 1.06, backgroundColor: "#059669" }}
							whileTap={{ scale: 0.96 }}
							transition={{ duration: 0.15 }}
						>
							<GitHubIcon className="w-3.5 h-3.5" /> GitHub
						</motion.a>
					</div>
				</div>
			</motion.nav>

			{/* ── HERO ──────────────────────────────────────────────────────── */}
			<section className="relative overflow-hidden bg-gray-950 min-h-[calc(100vh-3.75rem)] flex flex-col items-center justify-center py-24 px-6">
				{/* Radial emerald glow */}
				<div className="absolute inset-0 pointer-events-none">
					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07]"
						style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }}
					/>
				</div>

				{/* Dot grid */}
				<div
					className="absolute inset-0 opacity-[0.08] pointer-events-none"
					style={{
						backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)",
						backgroundSize: "36px 36px",
					}}
				/>

				{/* Slow-drifting orbs */}
				<motion.div
					className="absolute top-[15%] right-[12%] w-80 h-80 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none"
					animate={{ scale: [1, 1.25, 1], x: [0, 30, 0], y: [0, -20, 0] }}
					transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-[15%] left-[8%] w-64 h-64 rounded-full bg-teal-500/10 blur-[70px] pointer-events-none"
					animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], y: [0, 24, 0] }}
					transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				/>

				<div className="max-w-5xl mx-auto text-center relative z-10">
					{/* Badge */}
					<motion.div
						className="mb-10 inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.08)]"
						{...fadeUp(0.1)}
					>
						<motion.span
							className="w-2 h-2 rounded-full bg-emerald-500 block shrink-0"
							animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
							transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
						/>
						<span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
							The Creation of Layers
						</span>
						<span className="text-gray-700">·</span>
						<span className="font-mono text-[11px] text-emerald-500 tracking-wide">{DATA.subtitle}</span>
					</motion.div>

					{/* Headline */}
					<h1 className="font-mono font-bold text-white leading-[1.02] tracking-tight mb-8 text-[clamp(2.8rem,8vw,6.5rem)]">
						<div className="overflow-hidden">
							<motion.span
								className="block"
								initial={{ y: 110, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
							>
								Build
							</motion.span>
						</div>
						<div className="overflow-hidden">
							<motion.span
								className="block text-transparent bg-clip-text"
								style={{
									backgroundImage:
										"linear-gradient(90deg, #34d399 0%, #10b981 40%, #059669 100%)",
								}}
								initial={{ y: 110, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
							>
								Deeper.
							</motion.span>
						</div>
						<div className="overflow-hidden">
							<motion.span
								className="block"
								initial={{ y: 110, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
							>
								Impact Stronger.
							</motion.span>
						</div>
					</h1>

					<motion.p
						className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
						{...fadeUp(0.65)}
					>
						Kosha Nirman crafts open-source tools and systems with depth — every layer contributes
						to meaningful solutions that empower developers and businesses.
					</motion.p>

					<motion.div className="flex gap-4 justify-center flex-wrap" {...fadeUp(0.8)}>
						<motion.a
							href="#projects"
							className="bg-emerald-600 text-white px-8 py-4 rounded-full font-mono font-semibold text-[15px] shadow-xl shadow-emerald-900/40"
							whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(16,185,129,0.4)" }}
							whileTap={{ scale: 0.97 }}
							transition={{ duration: 0.15 }}
						>
							Explore Projects
						</motion.a>
						<motion.a
							href="#contribute"
							className="border border-white/10 text-gray-300 px-8 py-4 rounded-full font-mono font-semibold text-[15px] hover:border-emerald-500/40 hover:text-white transition-colors"
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.97 }}
							transition={{ duration: 0.15 }}
						>
							Contribute →
						</motion.a>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30"
					{...fadeUp(1.2)}
				>
					<span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
					<motion.div
						className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent"
						animate={{ scaleY: [0, 1, 0], originY: 0 }}
						transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					/>
				</motion.div>
			</section>

			{/* ── TICKER ────────────────────────────────────────────────────── */}
			<div className="bg-emerald-600 py-3 overflow-hidden">
				<motion.div
					className="flex gap-12 whitespace-nowrap"
					animate={{ x: ["0%", "-50%"] }}
					transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				>
					{[...ticker, ...ticker].map((item, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: duplicated ticker list, index is intentional
						<span key={i} className="font-mono text-[11px] uppercase tracking-widest text-emerald-100 shrink-0">
							{item}
							<span className="mx-6 text-emerald-300/60">·</span>
						</span>
					))}
				</motion.div>
			</div>

			{/* ── JOIN THE MOVEMENT ─────────────────────────────────────────── */}
			<section id="contribute" className="py-24 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<motion.div className="mb-14" {...inView(0)}>
						<span className="font-mono text-[11px] uppercase tracking-widest text-emerald-600 mb-3 block">
							Community
						</span>
						<h2 className="font-mono font-bold text-gray-900 text-4xl md:text-5xl tracking-tight">
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
								className={`group relative rounded-2xl p-7 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl ${card.accentShadow} ${card.accentBorder} transition-all duration-300 block overflow-hidden`}
								{...inView(i * 0.08)}
								whileHover={{ y: -4 }}
							>
								{/* Number watermark */}
								<span className="absolute top-4 right-6 font-mono text-6xl font-bold text-gray-100 group-hover:text-gray-50 transition-colors select-none">
									{card.num}
								</span>

								<div className="relative">
									<div className="flex items-center gap-2 mb-5">
										<span className={`w-2 h-2 rounded-full ${card.accentBg} shrink-0`} />
										<span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
											{card.badge}
										</span>
									</div>

									<h3 className="font-mono font-bold text-gray-900 text-2xl mb-3 tracking-tight">{card.title}</h3>
									<p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>

									<span
										className={`inline-flex items-center gap-1.5 font-mono font-medium text-sm ${card.accentText} group-hover:gap-3 transition-all duration-200`}
									>
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
			<section id="projects" className="py-24 px-6 bg-gray-950 relative overflow-hidden">
				{/* Subtle emerald glow */}
				<div
					className="absolute inset-0 opacity-[0.04] pointer-events-none"
					style={{ background: "radial-gradient(ellipse at 50% 100%, #10b981, transparent 60%)" }}
				/>

				<div className="max-w-6xl mx-auto relative z-10">
					<motion.div className="mb-16" {...inView(0)}>
						<span className="font-mono text-[11px] uppercase tracking-widest text-emerald-500 mb-3 block">
							What We Build
						</span>
						<h2 className="font-mono font-bold text-white text-4xl md:text-5xl tracking-tight leading-tight">
							Building technology with depth,
							<br />
							<span className="text-emerald-400">one layer at a time.</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{features.map((feat, i) => (
							<motion.div
								key={feat.title}
								className="group p-6 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-emerald-500/20 transition-all duration-300"
								{...inView(i * 0.1)}
								whileHover={{ y: -4 }}
							>
								<motion.div
									className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors duration-300"
									whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
									transition={{ duration: 0.35 }}
								>
									<feat.Icon className="w-5 h-5 text-emerald-400" />
								</motion.div>
								<h4 className="font-mono font-semibold text-white mb-2 text-[15px]">{feat.title}</h4>
								<p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA STRIP ─────────────────────────────────────────────────── */}
			<section className="relative overflow-hidden bg-emerald-600 py-20 px-6">
				<div
					className="absolute inset-0 opacity-[0.06] pointer-events-none"
					style={{
						backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
						backgroundSize: "28px 28px",
					}}
				/>
				<motion.div className="max-w-4xl mx-auto text-center relative z-10" {...inView(0)}>
					<span className="font-mono text-[11px] uppercase tracking-widest text-emerald-200 mb-5 block">
						Open Source
					</span>
					<h2 className="font-mono font-bold text-white text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
						Every great project starts
						<br />
						with a single layer.
					</h2>
					<p className="text-emerald-100/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
						Join hundreds of developers building tools that matter. No gatekeeping, no barriers —
						just meaningful open-source contributions.
					</p>
					<motion.a
						href={DATA.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-mono font-semibold text-[15px] shadow-xl"
						whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
						whileTap={{ scale: 0.97 }}
						transition={{ duration: 0.15 }}
					>
						<GitHubIcon className="w-4 h-4" />
						View on GitHub
					</motion.a>
				</motion.div>
			</section>

			{/* ── FOOTER ────────────────────────────────────────────────────── */}
			<footer className="relative overflow-hidden bg-gray-950 py-24 px-6">
				{/* Background glow */}
				<motion.div
					className="absolute top-[10%] right-[15%] w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"
					animate={{ scale: [1, 1.3, 1] }}
					transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-[5%] left-[10%] w-80 h-80 rounded-full bg-teal-500/5 blur-[100px] pointer-events-none"
					animate={{ scale: [1.2, 1, 1.2] }}
					transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				/>

				<div className="max-w-4xl mx-auto text-center relative z-10">
					{/* Terminal */}
					<div className="mb-14">
						<CodeTerminal />
					</div>

					<motion.p
						className="text-gray-600 text-sm mb-2"
						{...inView(0.1)}
					>
						Technology evolves through layers, each one building
						<br />
						meaningful solutions for developers.
					</motion.p>

					<motion.p
						className="font-mono text-emerald-500 text-xs tracking-widest uppercase mb-12"
						{...inView(0.15)}
					>
						kosha-nirman
					</motion.p>

					<motion.h2
						className="font-mono font-bold text-white text-4xl md:text-5xl mb-10 tracking-tight leading-tight"
						{...inView(0.2)}
					>
						Ready to contribute to
						<br />
						<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #34d399, #10b981)" }}>
							the next layer?
						</span>
					</motion.h2>

					<motion.div className="flex gap-4 justify-center" {...inView(0.3)}>
						<motion.a
							href={DATA.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-emerald-600 text-white px-8 py-4 rounded-full font-mono font-semibold text-[15px] shadow-lg shadow-emerald-900/40"
							whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
							whileTap={{ scale: 0.97 }}
							transition={{ duration: 0.15 }}
						>
							Start Contributing
						</motion.a>
					</motion.div>

					<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="font-mono text-xs text-gray-700">© {currentYear} Kosha Nirman. All rights reserved.</p>
						<div className="flex gap-6">
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="font-mono text-xs text-gray-700 hover:text-emerald-500 transition-colors tracking-wide"
							>
								GitHub
							</a>
							<a
								href={DATA.url}
								target="_blank"
								rel="noopener noreferrer"
								className="font-mono text-xs text-gray-700 hover:text-emerald-500 transition-colors tracking-wide"
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
