"use client";

import Image from "next/image";
import { BookIcon, CodeIcon, GitHubIcon, GlobeIcon, ToolsIcon } from "@/components/icons/Icons";
import { DATA } from "@/data/data";

export default function Home() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="min-h-screen">
			<nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm">
				<div className="flex justify-between items-center px-6 py-4 max-w-none w-full">
					<div className="flex items-center gap-2">
						<Image src="/logo.svg" alt={DATA.name} width={32} height={32} className="w-8 h-8" />
						<span className="font-semibold text-lg text-gray-900">{DATA.name}</span>
					</div>

					<div className="hidden md:flex items-center gap-8">
						<a
							href={DATA.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg inline-flex items-center gap-2"
						>
							<GitHubIcon className="w-4 h-4" /> GitHub
						</a>
					</div>
				</div>
			</nav>

			<section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-6 h-[calc(100vh-4rem)] flex items-center">
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<div className="mb-8 inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-shadow duration-300">
						The Creation of Layers
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
						Build <span className="italic text-emerald-600">Deeper</span>.
						<br />
						Impact Stronger.
					</h1>
					<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
						Kosha Nirman crafts open-source tools and systems with depth, where every layer
						contributes to meaningful solutions that empower developers and businesses.
					</p>
					<div className="flex gap-4 justify-center">
						<a
							href="#projects"
							className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
						>
							Explore Projects
						</a>
						<a
							href="#contribute"
							className="border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
						>
							Contribute →
						</a>
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Choose how you want to contribute to building meaningful technology solutions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-3 h-3 rounded-full bg-orange-500"></div>
								<span className="text-sm font-semibold text-gray-600">Open Source</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Contributors</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Join our community of developers building impactful tools. Contribute code,
								documentation, or ideas to projects that enhance developer productivity worldwide.
							</p>
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
							>
								Start Contributing →
							</a>
							<div className="mt-8 relative">
								<div className="absolute right-0 top-0 w-28 h-28 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-30"></div>
								<div className="absolute right-6 top-6 w-20 h-20 bg-gradient-to-br from-red-300 to-orange-300 rounded-full opacity-40"></div>
								<div className="absolute right-9 top-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-50"></div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-3 h-3 rounded-full bg-gray-700"></div>
								<span className="text-sm font-semibold text-gray-600">Leadership</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Maintainers</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Take ownership of projects and help guide their development. Lead initiatives,
								mentor contributors, and shape the future of our developer tools ecosystem.
							</p>
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-gray-700 font-semibold hover:text-gray-900"
							>
								Learn More →
							</a>
							<div className="mt-8 relative">
								<div className="absolute right-0 top-0 w-28 h-28 bg-gray-400 rounded-xl opacity-30"></div>
								<div className="absolute right-8 top-8 w-20 h-20 bg-gray-500 rounded-xl opacity-40"></div>
								<div className="absolute right-12 top-12 w-16 h-16 bg-gray-600 rounded-xl opacity-50"></div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-3 h-3 rounded-full bg-purple-500"></div>
								<span className="text-sm font-semibold text-gray-600">Community</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Community Builders</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Help grow our community by creating content, organizing events, and connecting
								developers. Share knowledge and foster collaboration across our ecosystem.
							</p>
							<a
								href={DATA.github}
								className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
							>
								Get Involved →
							</a>
							<div className="mt-8 relative">
								<div className="absolute right-0 top-0 w-0 h-0 border-l-[84px] border-l-transparent border-r-[84px] border-r-transparent border-b-[72px] border-b-purple-300 opacity-30"></div>
								<div className="absolute right-8 top-8 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[52px] border-b-indigo-300 opacity-40"></div>
								<div className="absolute right-12 top-14 w-0 h-0 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[42px] border-b-purple-400 opacity-50"></div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
								<span className="text-sm font-semibold text-gray-600">Documentation</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Writers</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Craft comprehensive guides and documentation that help developers understand and use
								our tools effectively. Make complex concepts accessible to everyone.
							</p>
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
							>
								Start Writing →
							</a>
							<div className="mt-8 relative">
								<div className="absolute right-0 top-0 w-28 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-30"></div>
								<div className="absolute right-8 top-8 w-20 h-12 bg-gradient-to-br from-teal-400 to-green-400 rounded-full opacity-40"></div>
								<div className="absolute right-12 top-12 w-16 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full opacity-50"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						Building technology with depth,
						<br />
						one layer at a time.
					</h3>
				</div>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="w-12 h-12 bg-emerald-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
							<CodeIcon className="w-6 h-6 text-emerald-600" />
						</div>
						<h4 className="font-semibold text-gray-900 mb-2">Open Source</h4>
						<p className="text-gray-600 text-sm leading-relaxed">
							All our projects are open source by default, fostering transparency and collaboration
						</p>
					</div>
					<div className="text-center">
						<div className="w-12 h-12 bg-emerald-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
							<ToolsIcon className="w-6 h-6 text-emerald-600" />
						</div>
						<h4 className="font-semibold text-gray-900 mb-2">Developer Tools</h4>
						<p className="text-gray-600 text-sm leading-relaxed">
							Crafting utilities and systems that enhance developer productivity and workflow
						</p>
					</div>
					<div className="text-center">
						<div className="w-12 h-12 bg-emerald-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
							<GlobeIcon className="w-6 h-6 text-emerald-600" />
						</div>
						<h4 className="font-semibold text-gray-900 mb-2">Community Driven</h4>
						<p className="text-gray-600 text-sm leading-relaxed">
							Active community participation where every contribution creates meaningful impact
						</p>
					</div>
					<div className="text-center">
						<div className="w-12 h-12 bg-emerald-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
							<BookIcon className="w-6 h-6 text-emerald-600" />
						</div>
						<h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
						<p className="text-gray-600 text-sm leading-relaxed">
							Comprehensive guides that make complex tools accessible to developers worldwide
						</p>
					</div>
				</div>
			</section>

			<footer className="relative overflow-hidden bg-white/70 backdrop-blur-lg border-t border-white/20 shadow-sm py-20 px-6">
				<div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-green-50/30 to-teal-50/30"></div>
				<div className="w-full max-w-none px-6 mx-auto text-center relative z-10">
					<div className="max-w-4xl mx-auto">
						<div className="mb-8">
							<div className="bg-gray-900 rounded-2xl p-8 mb-8 text-left max-w-md mx-auto shadow-lg">
								<div className="flex items-center gap-4 mb-4">
									<div className="flex gap-1">
										<div className="w-3 h-3 bg-red-500 rounded-full"></div>
										<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
										<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									</div>
								</div>
								<div className="font-mono text-sm text-white">
									<div className="text-pink-400">
										1 | <span className="text-purple-400">while</span> {`{`}
									</div>
									<div className="text-pink-400">
										2 | <span className="ml-8 text-blue-400">build()</span>
									</div>
									<div className="text-pink-400">
										3 | {`}`} <span className="text-purple-400">create</span>{" "}
										<span className="text-yellow-400">(layers)</span>
									</div>
								</div>
							</div>
						</div>
						<p className="mb-4">
							Technology evolves through layers, each one building
							<br />
							meaningful solutions for developers.
						</p>
						<h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
							<span className="italic text-emerald-600">kosha-nirman</span>
						</h1>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Ready to contribute to
							<br />
							the next layer?
						</h2>
						<div className="flex gap-4 justify-center">
							<a
								href={DATA.github}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg"
							>
								Start Contributing
							</a>
						</div>
						<div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
							<p>© {currentYear} Kosha Nirman. All rights reserved.</p>
							<div className="flex gap-6">
								<a
									href={DATA.github}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-gray-700 transition-colors"
								>
									GitHub
								</a>
								<a
									href={DATA.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-gray-700 transition-colors"
								>
									Website
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full opacity-20 blur-3xl"></div>
				<div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-300 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-10 blur-3xl"></div>
			</footer>
		</div>
	);
}
