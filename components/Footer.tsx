import React from 'react';

const Footer: React.FC = () => {
  const BOOK1_URL = "https://www.amazon.in/dp/B0CWT3T1YG?tag=cuelinkss26622-21&geniuslink=true";
  const BOOK2_URL = "https://www.amazon.in/Elder-Lands-II-Kingdom-Building-ebook/dp/B0FY3TWD3N?ref_=saga_dp_bnx_dsk_dp";
  const BUNDLE_URL = "https://www.amazon.in/dp/B0CW19B8B4?binding=kindle_edition&ref_=saga_dp_bnx_dsk_sdp";

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-20 relative text-white">
      <div className="container mx-auto px-6 md:px-12 md:pl-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center sm:text-left">

          {/* Discover / Books Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-xl font-header font-bold text-white uppercase tracking-widest mb-1 md:mb-2 border-b border-brand-red pb-2 inline-block w-full">Discover</h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              <li><a href={BOOK1_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">The Elder Lands (Book 1)</a></li>
              <li><a href={BOOK2_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Kingdom Building (Book 2)</a></li>
              <li><a href={BUNDLE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Elder Lands Bundle</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-xl font-header font-bold text-white uppercase tracking-widest mb-1 md:mb-2 border-b border-brand-red pb-2 inline-block w-full">Shop</h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              <li><a href={BUNDLE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Signed Bundle</a></li>
              <li><a href={BUNDLE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Series Collection</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-xl font-header font-bold text-white uppercase tracking-widest mb-1 md:mb-2 border-b border-brand-red pb-2 inline-block w-full">Community</h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">TikTok</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Reddit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Discord</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-xl font-header font-bold text-white uppercase tracking-widest mb-1 md:mb-2 border-b border-brand-red pb-2 inline-block w-full">Resources</h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Fief Maps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">Character Art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-body-mobile md:text-sm tracking-wide">God Orb System FAQ</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 md:mt-20 border-t border-white/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 font-sans text-[10px] md:text-sm text-center md:text-left">
            <p>Copyright {new Date().getFullYear()} B. Salem LLC. All rights reserved.</p>
            <p className="mt-1">The Elder Lands is a trademark of B. Salem LLC.</p>
          </div>
          <div className="flex gap-6 md:gap-8 text-gray-500 font-sans text-[10px] md:text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>
          <div className="text-brand-red font-header text-[8px] md:text-xs tracking-widest uppercase">
            Made with ❤️ by readers, for readers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;