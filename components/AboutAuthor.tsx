import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutAuthor: React.FC = () => {
    return (
        <section id="author" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 md:px-12 md:pl-32 flex flex-col md:flex-row items-center gap-12">

                <div className="w-full md:w-1/3">
                    <ScrollReveal animation="fade-right">
                        <div className="relative aspect-[3/4] border border-white/10 p-2 group hover:border-brand-red transition-colors duration-500">
                            <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                            <img src="https://picsum.photos/600/800?grayscale&random=9" alt="B. Salem" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </ScrollReveal>
                </div>

                <div className="w-full md:w-2/3">
                    <ScrollReveal animation="fade-left">
                        <h2 className="text-5xl font-header font-bold text-white mb-6 uppercase">Meet B. Salem</h2>
                        <div className="h-1 w-24 bg-brand-red mb-8"></div>

                        <div className="text-gray-300 font-sans text-lg leading-relaxed space-y-6">
                            <p>
                                Hi, I'm B. Salem. But you can call me Bassel.
                            </p>
                            <p>
                                I write kingdom-building LitRPG for readers who crave crunchy systems grounded in human relationships. The Elder Lands started as a question: <em>What if the hardest battle a young noble faces isn't monsters—but proving himself to the mentor he most respects?</em>
                            </p>
                            <p>
                                100K Royal Road readers answered. Turns out, you crave that tension too.
                            </p>
                            <p>
                                I grew up obsessed with strategy games—Crusader Kings, Civ 6—and epic fantasy that takes consequences seriously. The Elder Lands is my love letter to both: mechanics + heart, strategy + emotion, ambition + humility.
                            </p>
                            <p>
                                When I'm not writing, I'm reading Cradle, Wandering Inn, HWFWM, gaming, or hanging out in the writing community. The support from readers has been overwhelming and humbling.
                            </p>
                            <p className="font-bold text-white">
                                Book 5 is in progress. The Elder Lands will continue, and yes, there's more world to explore beyond Barwalis.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <ScrollReveal animation="fade-up" stagger={0.1}>
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
                            <div className="opacity-0">
                                <span className="block text-2xl font-bold text-white mb-1">100K</span>
                                <span className="text-xs text-brand-red uppercase tracking-widest">Pages Read (2024–2025)</span>
                            </div>
                            <div className="opacity-0">
                                <span className="block text-2xl font-bold text-white mb-1">1,500</span>
                                <span className="text-xs text-brand-red uppercase tracking-widest">Reviews (4.7 avg)</span>
                            </div>
                            <div className="opacity-0">
                                <span className="block text-2xl font-bold text-white mb-1">5,000+</span>
                                <span className="text-xs text-brand-red uppercase tracking-widest">Email Subscribers</span>
                            </div>
                            <div className="opacity-0">
                                <span className="block text-2xl font-bold text-white mb-1">10 Hours</span>
                                <span className="text-xs text-brand-red uppercase tracking-widest">Committed/Week</span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default AboutAuthor;
