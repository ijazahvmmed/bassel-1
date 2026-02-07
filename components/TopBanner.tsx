import React from 'react';

const TopBanner: React.FC = () => {
    return (
        <div className="bg-brand-red text-white py-2 px-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 font-sans text-xs md:text-sm tracking-widest uppercase">
            <span>GET YOUR FREE ELDER LANDS PREQUEL – Lucan's First Rite Hunt</span>
            <a href="#" className="font-bold underline hover:text-black transition-colors">Download Now</a>
        </div>
    );
};

export default TopBanner;
