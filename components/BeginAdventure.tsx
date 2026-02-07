import React from 'react';

const BeginAdventure: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-4">Begin Your Adventure</h2>
                    <div className="h-1 w-24 bg-brand-red mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: Audiobook */}
                    <div className="group bg-black border border-white/10 p-8 flex flex-col hover:border-brand-red transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <h3 className="text-2xl font-header font-bold text-white mb-2 uppercase">Listen on Audible</h3>
                        <p className="text-gray-400 font-sans text-sm mb-8 flex-grow">12–15 hours per book, professional narration.</p>
                        <button className="w-full py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red transition-colors text-xs">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Card 2: Kindle Unlimited */}
                    <div className="group bg-black border border-white/10 p-8 flex flex-col hover:border-brand-red transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Best Value</div>
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h3 className="text-2xl font-header font-bold text-white mb-2 uppercase">Read Free in KU</h3>
                        <p className="text-gray-400 font-sans text-sm mb-8 flex-grow">All 4 books included, 2,000 pages total.</p>
                        <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-xs">
                            Get Book 1 Free
                        </button>
                    </div>

                    {/* Card 3: Paperback */}
                    <div className="group bg-black border border-white/10 p-8 flex flex-col hover:border-brand-red transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-header font-bold text-white mb-2 uppercase">Own the Series</h3>
                        <p className="text-gray-400 font-sans text-sm mb-8 flex-grow">Hardcover & Paperback with deluxe maps.</p>
                        <button className="w-full py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red transition-colors text-xs">
                            Shop Paperbacks
                        </button>
                    </div>

                    {/* Card 4: Signed Edition */}
                    <div className="group bg-black border border-white/10 p-8 flex flex-col hover:border-brand-red transition-all duration-300 hover:-translate-y-2">
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </div>
                        <h3 className="text-2xl font-header font-bold text-white mb-2 uppercase">Signed Edition</h3>
                        <p className="text-gray-400 font-sans text-sm mb-8 flex-grow">Limited hardcover run signed by B. Salem. Free shipping.</p>
                        <button className="w-full py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red transition-colors text-xs">
                            Order Signed
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BeginAdventure;
