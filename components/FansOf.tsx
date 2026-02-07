import React from 'react';
import ScrollReveal from './ScrollReveal';

const FansOf: React.FC = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-black relative">
            <div className="container mx-auto px-6 md:px-12 md:pl-32">
                <ScrollReveal animation="fade-up">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-h1-mobile md:text-5xl lg:text-h1-desktop font-header font-bold text-white uppercase text-center md:text-left">For Fans Of...</h2>
                        <div className="h-1 w-24 bg-brand-red mb-6 mx-auto md:mx-0"></div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" stagger={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                        {/* Cradle Readers */}
                        <div className="bg-brand-dark border border-white/10 p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 group opacity-0">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-4 md:mb-6 text-center group-hover:text-brand-red transition-colors">Cradle Readers</h3>

                            <div className="mb-6">
                                <h4 className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4 border-b border-white/10 pb-2">If you loved...</h4>
                                <ul className="text-gray-400 font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• Mentor-apprentice tension</li>
                                    <li>• Crunchy progression systems</li>
                                    <li>• Weak-to-strong protagonist</li>
                                    <li>• Earned advancement through struggle</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] md:text-sm font-bold text-brand-red uppercase tracking-widest mb-3 md:mb-4 border-b border-brand-red/20 pb-2">You'll love Elder Lands because...</h4>
                                <ul className="text-white font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• Father-son dynamic rivals Cradle's best arcs</li>
                                    <li>• God Orbs create genuine scarcity & forced choice</li>
                                    <li>• Lucan's growth feels earned, not handed</li>
                                    <li>• Four-book arc sustains tension without filler</li>
                                </ul>
                            </div>
                        </div>

                        {/* The Wandering Inn Readers */}
                        <div className="bg-brand-dark border border-white/10 p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 group opacity-0">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-4 md:mb-6 text-center group-hover:text-brand-red transition-colors">The Wandering Inn</h3>

                            <div className="mb-6">
                                <h4 className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4 border-b border-white/10 pb-2">If you loved...</h4>
                                <ul className="text-gray-400 font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• Settlement building from chaos</li>
                                    <li>• Management logistics</li>
                                    <li>• Character-driven slice-of-life</li>
                                    <li>• Fantasy realism—no magic fixes</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] md:text-sm font-bold text-brand-red uppercase tracking-widest mb-3 md:mb-4 border-b border-brand-red/20 pb-2">You'll love Elder Lands because...</h4>
                                <ul className="text-white font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• Road yields, refugee labor, trade economics</li>
                                    <li>• Every resource decision has consequences</li>
                                    <li>• Grounded problem-solving under pressure</li>
                                    <li>• Kingdom grows tangibly—acre by acre</li>
                                </ul>
                            </div>
                        </div>

                        {/* HWFWM Readers */}
                        <div className="bg-brand-dark border border-white/10 p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 group opacity-0">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-4 md:mb-6 text-center group-hover:text-brand-red transition-colors">He Who Fights Monsters</h3>

                            <div className="mb-6">
                                <h4 className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4 border-b border-white/10 pb-2">If you loved...</h4>
                                <ul className="text-gray-400 font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• System mechanics authenticity</li>
                                    <li>• Monster hunting progression</li>
                                    <li>• Snarky introspection with vulnerability</li>
                                    <li>• Balanced combat & character growth</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] md:text-sm font-bold text-brand-red uppercase tracking-widest mb-3 md:mb-4 border-b border-brand-red/20 pb-2">You'll love Elder Lands because...</h4>
                                <ul className="text-white font-sans text-body-mobile md:text-sm space-y-2">
                                    <li>• God Orbs, Skill slots, Vital Orb tiers—crunchy!</li>
                                    <li>• Beast hunts drive both advancement & narrative</li>
                                    <li>• Lucan's doubt & determination form a complex hero</li>
                                    <li>• Action serves character</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FansOf;
