import React from 'react';

const Quotes: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-4">Words That Resonate</h2>
                    <div className="h-1 w-24 bg-brand-red mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                    {/* Quote 1 */}
                    <blockquote className="bg-black border border-white/10 p-8 md:p-12 relative group hover:border-brand-red transition-all duration-300">
                        <span className="text-6xl text-brand-red font-serif absolute top-4 left-6 opacity-30 select-none">“</span>
                        <p className="text-gray-300 font-serif text-xl italic leading-relaxed mb-6 z-10 relative">
                            "You only see what you want to see, son. You forgo everything else... like ruin."
                        </p>
                        <footer className="text-sm border-t border-white/10 pt-4">
                            <span className="text-white font-bold uppercase tracking-widest block">Sir Golan</span>
                            <span className="text-gray-500 uppercase text-xs tracking-wider">Warning Lucan about the refugee gamble</span>
                        </footer>
                    </blockquote>

                    {/* Quote 2 */}
                    <blockquote className="bg-black border border-white/10 p-8 md:p-12 relative group hover:border-brand-red transition-all duration-300">
                        <span className="text-6xl text-brand-red font-serif absolute top-4 left-6 opacity-30 select-none">“</span>
                        <p className="text-gray-300 font-serif text-xl italic leading-relaxed mb-6 z-10 relative">
                            "When you're leading, your responsibility isn't only to fight. You must create space for others to survive."
                        </p>
                        <footer className="text-sm border-t border-white/10 pt-4">
                            <span className="text-white font-bold uppercase tracking-widest block">Sir Golan</span>
                            <span className="text-gray-500 uppercase text-xs tracking-wider">Teaching Lucan during the Hesati outbreak</span>
                        </footer>
                    </blockquote>

                    {/* Quote 3 */}
                    <blockquote className="bg-black border border-white/10 p-8 md:p-12 relative group hover:border-brand-red transition-all duration-300">
                        <span className="text-6xl text-brand-red font-serif absolute top-4 left-6 opacity-30 select-none">“</span>
                        <p className="text-gray-300 font-serif text-xl italic leading-relaxed mb-6 z-10 relative">
                            "Everyone freezes up the first time."
                        </p>
                        <footer className="text-sm border-t border-white/10 pt-4">
                            <span className="text-white font-bold uppercase tracking-widest block">Lees</span>
                            <span className="text-gray-500 uppercase text-xs tracking-wider">Lucan's mentor after his first beast hunt</span>
                        </footer>
                    </blockquote>

                    {/* Quote 4 */}
                    <blockquote className="bg-black border border-white/10 p-8 md:p-12 relative group hover:border-brand-red transition-all duration-300">
                        <span className="text-6xl text-brand-red font-serif absolute top-4 left-6 opacity-30 select-none">“</span>
                        <p className="text-gray-300 font-serif text-xl italic leading-relaxed mb-6 z-10 relative">
                            "If I cause a mess and run away, then I'm simply... a child."
                        </p>
                        <footer className="text-sm border-t border-white/10 pt-4">
                            <span className="text-white font-bold uppercase tracking-widest block">Lucan</span>
                            <span className="text-gray-500 uppercase text-xs tracking-wider">Accepting the weight of responsibility</span>
                        </footer>
                    </blockquote>

                </div>
            </div>
        </section>
    );
};

export default Quotes;
