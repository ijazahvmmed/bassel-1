import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const SeriesReadingOrder: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-black text-white min-h-screen pt-32 pb-24">

            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 md:pl-32 mb-16">
                <ScrollReveal animation="fade-right">
                    <nav className="text-gray-500 font-sans text-xs uppercase tracking-widest mb-4">
                        <span className="hover:text-white cursor-pointer transition-colors">Home</span> &gt; <span className="hover:text-white cursor-pointer transition-colors">The Series</span> &gt; <span className="text-brand-red font-bold">Reading Order</span>
                    </nav>
                    <h1 className="text-5xl md:text-7xl font-header font-bold uppercase mb-6 tracking-tighter">The Elder Lands Series</h1>
                    <p className="text-xl md:text-2xl font-serif italic text-gray-300 mb-4 max-w-4xl leading-relaxed">
                        Two Complete Books. Two More Coming. Grounded kingdom-building with earned progression and genuine family drama.
                    </p>
                    <p className="text-gray-400 font-sans tracking-wide">
                        A 4-book LitRPG series by B. Salem. Reading order, buy links, and story arcs.
                    </p>
                </ScrollReveal>
            </div>

            {/* Status Indicator */}
            <div className="container mx-auto px-6 md:px-12 md:pl-32 mb-24">
                <ScrollReveal animation="fade-up">
                    <div className="bg-brand-dark/30 border border-white/10 p-8 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <span className="block text-brand-red font-bold text-sm uppercase tracking-widest mb-2">Books 1–2</span>
                                <span className="text-white text-lg font-header font-bold uppercase">Published in Kindle Unlimited, Audible, Paperback & Hardcover</span>
                            </div>
                            <div>
                                <span className="block text-brand-red font-bold text-sm uppercase tracking-widest mb-2">Books 3–4</span>
                                <span className="text-white text-lg font-header font-bold uppercase">Coming 2026</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-4 border-t border-white/10 text-gray-400 text-sm font-sans italic">
                            Note: No cliffhangers between published books—complete arcs with satisfying closure.
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Why Readers Love... */}
            <div className="container mx-auto px-6 md:px-12 md:pl-32 mb-24">
                <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-header font-bold uppercase mb-12 border-l-4 border-brand-red pl-6">Why Readers Love The Elder Lands</h2>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" stagger={0.15}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-brand-dark p-6 border border-white/5 hover:border-brand-red transition-colors group opacity-0">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏰</div>
                            <h3 className="text-xl font-header font-bold uppercase mb-2 group-hover:text-brand-red transition-colors">Grounded Kingdom-Building</h3>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                Real costs, real consequences. Salt extraction, debt management, refugee settlement—no magic fixes.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-brand-dark p-6 border border-white/5 hover:border-brand-red transition-colors group opacity-0">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚔️</div>
                            <h3 className="text-xl font-header font-bold uppercase mb-2 group-hover:text-brand-red transition-colors">Father-Son Drama</h3>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                Active opposition, not distant mentorship. Golan doesn't support Lucan's ambitions—forcing genuine growth.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-brand-dark p-6 border border-white/5 hover:border-brand-red transition-colors group opacity-0">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                            <h3 className="text-xl font-header font-bold uppercase mb-2 group-hover:text-brand-red transition-colors">Crunchy Progression</h3>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                God Orbs, limited Skill slots, Vital Orbs. System rewards strategy. Scarcity forces meaningful choices.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-brand-dark p-6 border border-white/5 hover:border-brand-red transition-colors group opacity-0">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                            <h3 className="text-xl font-header font-bold uppercase mb-2 group-hover:text-brand-red transition-colors">Coming-of-Age Arc</h3>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                From uncertain youth to proven lord. Lucan learns ambition without wisdom is catastrophe.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* The Complete Series */}
            <div className="container mx-auto px-6 md:px-12 md:pl-32 mb-24">
                <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-header font-bold uppercase mb-4 border-l-4 border-brand-red pl-6">The Complete Series</h2>
                    <p className="text-gray-400 text-lg font-sans mb-12 ml-6 max-w-2xl">
                        All published books available in multiple formats. No cliffhangers—complete story arcs with satisfying resolution.
                    </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" stagger={0.2}>
                    <div className="flex flex-col gap-16">

                        {/* Book 1 */}
                        <div className="flex flex-col md:flex-row gap-8 bg-brand-dark/20 p-8 border border-white/10 opacity-0">
                            <div className="w-full md:w-1/4 relative aspect-[2/3] bg-black border border-white/20 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">BOOK 1</div>
                            </div>
                            <div className="w-full md:w-3/4 flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <span className="bg-green-500/10 text-green-500 border border-green-500 text-xs font-bold uppercase px-2 py-1 tracking-widest rounded">Published</span>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded">Story Arc: Foundation</span>
                                </div>
                                <h3 className="text-3xl font-header font-bold uppercase text-white hover:text-brand-red transition-colors cursor-pointer">The Elder Lands: Coming of Age, the Price of Land</h3>
                                <p className="text-gray-300 font-sans leading-relaxed text-sm">
                                    At 16, Lucan inherits four rare Skill slots. When 400 refugees arrive, his ambition clashes with his father's caution. Struggles with trade, debt, and a labyrinth assassination attempt test his resolve. Book 1 ends with Wildermen raid—and a looming war.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase text-gray-500 mt-2">
                                    <span>343 pages</span>
                                    <span>4.7 stars | 500+ reviews</span>
                                    <span>Published 2024</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <button className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 text-xs hover:bg-brand-red hover:text-white transition-colors">Read Free in KU</button>
                                    <button className="border border-white/30 text-white font-bold uppercase tracking-widest px-6 py-3 text-xs hover:border-brand-red hover:border-brand-red transition-colors">Listen on Audible</button>
                                </div>
                            </div>
                        </div>

                        {/* Book 2 */}
                        <div className="flex flex-col md:flex-row gap-8 bg-brand-dark/20 p-8 border border-white/10 opacity-0">
                            <div className="w-full md:w-1/4 relative aspect-[2/3] bg-black border border-white/20 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">BOOK 2</div>
                            </div>
                            <div className="w-full md:w-3/4 flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <span className="bg-green-500/10 text-green-500 border border-green-500 text-xs font-bold uppercase px-2 py-1 tracking-widest rounded">Published</span>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded">Story Arc: Trials</span>
                                </div>
                                <h3 className="text-3xl font-header font-bold uppercase text-white hover:text-brand-red transition-colors cursor-pointer">The Elder Lands: War, Leadership, Ascension</h3>
                                <p className="text-gray-300 font-sans leading-relaxed text-sm">
                                    The kingdom marches to war. Lucan is separated from his father, forced to lead men into enemy territory. He's knighted for his leadership. Then a ranger brings shocking news: his father is alive but captured. The book ends with the King's death and political fracture.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase text-gray-500 mt-2">
                                    <span>4.7 stars</span>
                                    <span>Published 2024</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <button className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 text-xs hover:bg-brand-red hover:text-white transition-colors">Read Free in KU</button>
                                    <button className="border border-white/30 text-white font-bold uppercase tracking-widest px-6 py-3 text-xs hover:border-brand-red hover:border-brand-red transition-colors">Listen on Audible</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>

            {/* Recommended Reading Order */}
            <div className="container mx-auto px-6 md:px-12 md:pl-32">
                <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-header font-bold uppercase mb-12 border-l-4 border-brand-red pl-6">Recommended Reading Order</h2>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" stagger={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Step 1 */}
                        <div className="bg-brand-dark p-8 border border-white/5 relative opacity-0">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-red flex items-center justify-center text-3xl font-bold shadow-xl rounded-full border-4 border-black z-10">1</div>
                            <h3 className="text-2xl font-header font-bold uppercase text-white mb-2 pl-4">Book 1</h3>
                            <h4 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4 pl-4">Coming of Age, the Price of Land</h4>
                            <p className="text-gray-400 font-sans leading-relaxed px-4 pb-4">
                                Start here. Introduces Lucan Zesh at 16, his Elder Blessing (4 rare Skill slots), the refugee crisis, and the foundation of his journey. Ends with Wildermen raid and war declaration. No cliffhanger—complete story arc.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-brand-dark p-8 border border-white/5 relative opacity-0">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-red flex items-center justify-center text-3xl font-bold shadow-xl rounded-full border-4 border-black z-10">2</div>
                            <h3 className="text-2xl font-header font-bold uppercase text-white mb-2 pl-4">Book 2</h3>
                            <h4 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4 pl-4">War, Leadership, Ascension</h4>
                            <p className="text-gray-400 font-sans leading-relaxed px-4 pb-4">
                                Follows Book 1. Lucan transforms from heir to proven lord through military trials, his father's sacrifice, and political upheaval. Ends with the King's death and fractured kingdom. No cliffhanger—complete arc. Safe to stop here.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

        </section>
    );
}

export default SeriesReadingOrder;
