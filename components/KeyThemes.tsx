import React from 'react';

const KeyThemes: React.FC = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-brand-dark/50 relative">
            <div className="container mx-auto px-6 md:px-12 md:pl-32">
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

                    <div className="w-full md:w-1/3 sticky top-32">
                        <h3 className="text-brand-red font-header font-bold tracking-[0.2em] mb-4 text-[10px] md:text-sm animate-[fadeIn_1s_ease-out] uppercase">THEMES</h3>
                        <h2 className="text-h1-mobile md:text-5xl lg:text-h1-desktop font-header font-bold text-white uppercase mb-6 md:mb-8 leading-none">The Story Readers Can't Stop Talking About</h2>
                        <div className="h-1 w-24 bg-white/20 mb-6 md:mb-8"></div>
                        <p className="text-gray-400 font-sans text-body-mobile md:text-lg">
                            Discover the core pillars that make The Elder Lands a unique experience in the LitRPG genre.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 gap-6 md:gap-8">

                        {/* Theme 1 */}
                        <div className="border-l-2 border-brand-red pl-6 md:pl-8 py-3 md:py-4 hover:bg-white/5 transition-colors duration-300">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-2">Father-Son Dynamics</h3>
                            <p className="text-gray-300 font-sans text-xs md:text-lg italic mb-2">"Neither distant mentorship nor easy support."</p>
                            <p className="text-gray-400 font-sans text-[10px] md:text-sm leading-relaxed">
                                His father built through caution. His son builds through ambition. One of them will be right. Both will be scarred by the attempt. Not distant mentorship—active, loving opposition.
                            </p>
                        </div>

                        {/* Theme 2 */}
                        <div className="border-l-2 border-white/20 pl-6 md:pl-8 py-3 md:py-4 hover:border-brand-red hover:bg-white/5 transition-colors duration-300">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-2">Crunchy Progression</h3>
                            <p className="text-gray-300 font-sans text-xs md:text-lg italic mb-2">"Advancement earned, not given."</p>
                            <p className="text-gray-400 font-sans text-[10px] md:text-sm leading-relaxed">
                                Four Skill slots. God Orbs. Limited choices. Every advancement costs something and teaches you something. Limited Skill slots force meaningful choice.
                            </p>
                        </div>

                        {/* Theme 3 */}
                        <div className="border-l-2 border-white/20 pl-6 md:pl-8 py-3 md:py-4 hover:border-brand-red hover:bg-white/5 transition-colors duration-300">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-2">Kingdom-Building Stakes</h3>
                            <p className="text-gray-300 font-sans text-xs md:text-lg italic mb-2">"Real economy. Real consequences."</p>
                            <p className="text-gray-400 font-sans text-[10px] md:text-sm leading-relaxed">
                                Build a legacy from risk. Roads boost trade. Refugees feed you. Every decision ripples through your fief—and your family. Flagstone costs, trade yields, grain management.
                            </p>
                        </div>

                        {/* Theme 4 */}
                        <div className="border-l-2 border-white/20 pl-6 md:pl-8 py-3 md:py-4 hover:border-brand-red hover:bg-white/5 transition-colors duration-300">
                            <h3 className="text-h2-mobile md:text-2xl font-header font-bold text-white uppercase mb-2">Coming-of-Age Transformation</h3>
                            <p className="text-gray-300 font-sans text-xs md:text-lg italic mb-2">"Everyone freezes the first time."</p>
                            <p className="text-gray-400 font-sans text-[10px] md:text-sm leading-relaxed">
                                Watch a bookish heir become the leader his fief desperately needs. Rite of passage, vulnerability, fear, courage.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default KeyThemes;
