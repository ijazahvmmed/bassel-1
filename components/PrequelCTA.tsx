import React from 'react';

const PrequelCTA: React.FC = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-brand-red relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-12">

                <div className="w-full md:w-2/3">
                    <h2 className="text-h1-mobile md:text-5xl lg:text-h1-desktop font-header font-bold text-white uppercase mb-4 md:mb-6 leading-tight md:leading-none">
                        Get Your FREE Elder Lands Prequel – <span className="text-black text-stroke-white">Lucan's First Rite Hunt</span>
                    </h2>
                    <p className="text-white/90 font-sans text-body-mobile md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
                        A free 40-page novella that starts the story before Book 1. In this prequel, 16-year-old Lucan experiences his first beast hunt—solo, afraid, learning. It's the moment everything changes. <strong className="text-white">This is exclusive content not in the books.</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        <button className="bg-white text-brand-red font-header font-bold uppercase tracking-widest py-3 md:py-4 px-8 md:px-12 text-xs md:text-sm shadow-xl hover:bg-black hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                            Download Free PDF
                        </button>
                        <p className="text-white/70 text-[10px] md:text-xs max-w-xs mt-2 font-sans md:mt-0">
                            *You'll also get exclusive updates on Book 5 & author notes. No spam. One email per month maximum. Unsubscribe anytime.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
                    {/* Book Mockup Placeholder */}
                    <div className="relative w-40 md:w-64 aspect-[2/3] bg-black shadow-2xl rotate-3 border-4 border-white/20">
                        <div className="absolute inset-0 flex items-center justify-center border border-white/10 m-2">
                            <span className="text-white font-header font-bold text-center uppercase tracking-widest p-4 text-[10px] md:text-base">
                                LUCAN'S<br />FIRST<br />RITE<br />HUNT
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PrequelCTA;
