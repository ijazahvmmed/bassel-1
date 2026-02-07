import React from 'react';

const TopBanner: React.FC = () => {
    const BOOK1_URL = "https://www.amazon.in/dp/B0CWT3T1YG?tag=cuelinkss26622-21&geniuslink=true";

    return (
        <div className="bg-brand-red text-white py-2 px-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 font-sans text-xs md:text-sm tracking-widest uppercase">
            <span>GET YOUR FREE ELDER LANDS PREQUEL – Lucan's First Rite Hunt</span>
            <a href={BOOK1_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-black transition-colors">Download Now</a>
        </div>
    );
};

export default TopBanner;
