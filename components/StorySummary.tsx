import React from 'react';

const StorySummary: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="container mx-auto flex flex-col items-center text-center max-w-4xl relative z-10">
                <h3 className="text-brand-red font-header font-bold tracking-[0.2em] mb-4 text-sm md:text-base animate-[fadeIn_1s_ease-out] uppercase">
                    The Story
                </h3>
                <h2 className="text-3xl md:text-5xl font-header font-bold text-white mb-6 uppercase leading-tight">
                    At 16, Lucan Zesh Inherited a Gift Most Nobles Dream Of
                </h2>
                <h4 className="text-xl md:text-2xl font-serif italic text-gray-400 mb-12">
                    He didn't know it would cost him everything.
                </h4>

                <div className="prose prose-invert prose-lg text-gray-300 font-sans leading-relaxed text-left md:text-center">
                    <p className="mb-6">
                        Barwalis fief has survived on caution. Sir Golan built it through restraint, through survival instincts honed by past crises. His son sees something different—possibility.
                    </p>
                    <p className="mb-6">
                        When Lucan receives his Elder Blessing at sixteen—four rare Skill slots, a windfall—he sees roads where others see ruin. Settlement opportunities where his father sees financial catastrophe.
                    </p>
                    <p className="mb-6">
                        Then 400 refugees from the Shattered Kingdom arrive at their gates. His father says no. Lucan says yes.
                    </p>
                    <p className="mb-6">
                        What follows is a series of cascading crises that test everything Lucan believes about leadership: Hesati beast outbreaks. Economic shortfalls. Royal audits. Neighborhood hostilities. And beneath it all, a growing rift with the one person whose opinion matters most.
                    </p>
                    <p>
                        Four complete books. No exile narratives. Just a young heir learning that ambition without wisdom is catastrophe with a sword, and that the greatest legacy his father can leave him isn't a fief—it's the courage to do better.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StorySummary;
