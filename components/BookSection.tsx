import React from 'react';
import { AmazonPrice } from '../hooks/useAmazonPrice';

const BookSection: React.FC = () => {
  const BOOK1_URL = "https://www.amazon.in/dp/B0CWT3T1YG?tag=cuelinkss26622-21&geniuslink=true";
  const BOOK2_URL = "https://www.amazon.in/Elder-Lands-II-Kingdom-Building-ebook/dp/B0FY3TWD3N?ref_=saga_dp_bnx_dsk_dp";
  const BUNDLE_URL = "https://www.amazon.in/dp/B0CW19B8B4?binding=kindle_edition&ref_=saga_dp_bnx_dsk_sdp";

  return (
    <section id="books" className="py-12 md:py-20 lg:py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 md:pl-32">

        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-h1-mobile md:text-5xl lg:text-h1-desktop font-header font-bold text-white uppercase mb-4">The Elder Lands Series</h2>
          <div className="h-1 w-24 bg-brand-red mb-6 md:mx-0 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">

          {/* Book 1 Card */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-brand-dark/20 p-6 md:p-8 border border-white/5 relative group hover:border-brand-red/30 transition-colors">
            <div className="w-full md:w-1/3 relative aspect-[2/3] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="https://picsum.photos/600/900?grayscale&random=11" alt="Book 1 Cover" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6">
              <h3 className="text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white uppercase">The Elder Lands – Book 1</h3>
              <p className="text-gray-300 font-sans text-body-mobile md:text-lg leading-relaxed">
                When Lucan Zesh inherits four rare Skill slots, he doesn't know yet that ambition and wisdom are not the same thing. The journey to elevate the Zesh family begins with a single, dangerous step.
              </p>

              <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500">
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> 1,500 reviews, 4.75 stars</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Epic Progression Fantasy</span>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-gray-500 line-through text-base md:text-lg font-sans">$9.99</span>
                <span className="text-brand-red text-xl md:text-2xl font-bold font-header tracking-widest">
                  <AmazonPrice asin="B0CWT3T1YG" />
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <a href={BOOK1_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold text-center uppercase tracking-widest px-8 py-3 hover:bg-brand-red hover:text-white transition-colors text-xs md:text-sm">Order on Amazon</a>
                <a href={BOOK1_URL} target="_blank" rel="noopener noreferrer" className="text-white text-center uppercase text-xs md:text-sm font-bold tracking-widest border-b border-white hover:text-brand-red hover:border-brand-red transition-colors pb-1 inline-block w-fit md:mx-0 mx-auto">View Details</a>
              </div>
            </div>
          </div>

          {/* Book 2 Card */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center bg-brand-dark/20 p-6 md:p-8 border border-white/5 relative group hover:border-brand-red/30 transition-colors">
            <div className="w-full md:w-1/3 relative aspect-[2/3] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="https://picsum.photos/600/900?grayscale&random=12" alt="Book 2 Cover" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6 md:text-right md:items-end">
              <h3 className="text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white uppercase">The Elder Lands II – Kingdom Building</h3>
              <p className="text-gray-300 font-sans text-body-mobile md:text-lg leading-relaxed">
                As Barwalis grows, so do the threats. Lucan must balance his own progression with the needs of a burgeoning settlement. The system is crunchy, the stakes are high, and the growth is real.
              </p>

              <div className="flex flex-wrap md:justify-end gap-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500">
                <span className="flex items-center gap-2">New Release <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Settlement Management</span>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-brand-red text-xl md:text-2xl font-bold font-header tracking-widest">
                  <AmazonPrice asin="B0FY3TWD3N" />
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <a href={BOOK2_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold text-center uppercase tracking-widest px-8 py-3 hover:bg-brand-red hover:text-white transition-colors text-xs md:text-sm">Order on Amazon</a>
                <a href={BOOK2_URL} target="_blank" rel="noopener noreferrer" className="text-white text-center uppercase text-xs md:text-sm font-bold tracking-widest border-b border-white hover:text-brand-red hover:border-brand-red transition-colors pb-1 inline-block w-fit md:mx-0 mx-auto">View Details</a>
              </div>
            </div>
          </div>

          {/* Series Bundle Card */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-brand-dark/20 p-6 md:p-8 border border-white/5 relative group hover:border-brand-red/30 transition-colors">
            <div className="w-full md:w-1/3 relative aspect-[4/3] overflow-hidden shadow-2xl border border-white/10 p-2 bg-black">
              <img src="https://picsum.photos/800/600?grayscale&random=15" alt="Bundle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6">
              <h3 className="text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white uppercase">Series Bundle – Books 1 & 2</h3>
              <p className="text-gray-300 font-sans text-body-mobile md:text-lg leading-relaxed">
                2 books. One epic journey. Perfect for binge readers who want the complete start of Lucan's rise to power.
              </p>

              <ul className="flex flex-col gap-2 text-gray-400 font-sans text-xs md:text-sm">
                <li>Complete first arc</li>
                <li>800+ total pages of content</li>
                <li>Whispersync for Voice ready</li>
              </ul>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-brand-red text-xl md:text-2xl font-bold font-header tracking-widest">
                  <AmazonPrice asin="B0CW19B8B4" />
                </span>
                <span className="text-green-500 text-[10px] md:text-sm font-bold uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Best Value</span>
              </div>

              <div className="mt-4">
                <a href={BUNDLE_URL} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white text-white font-bold text-center uppercase tracking-widest px-8 py-3 hover:bg-brand-red hover:border-brand-red transition-colors text-xs md:text-sm inline-block w-full md:w-auto">Get Series Bundle</a>
              </div>
            </div>
          </div>

          {/* Grid for KU and Deluxe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* KU Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 border border-white/10 flex flex-col relative overflow-hidden group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-full -mr-10 -mt-10"></div>
              <h3 className="text-xl md:text-2xl font-header font-bold text-white uppercase mb-4 group-hover:text-brand-red transition-colors">Binge the Father-Son Epic</h3>
              <p className="text-gray-400 font-sans text-body-mobile md:text-sm mb-6 flex-grow">
                2 books. Binge the entire father-son epic. Free with Kindle Unlimited Membership.
              </p>
              <ul className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2 flex flex-col mb-8">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> All 2 books in KU</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Whispersync enabled</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> No waiting</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white text-lg md:text-xl font-header font-bold mb-4">Free with KU <span className="text-[10px] md:text-xs font-normal text-gray-500 align-middle">or <AmazonPrice asin="B0CWT3T1YG" />/book</span></p>
                <a href={BOOK1_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white text-black font-bold text-center uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors text-xs inline-block">Get Book 1 Free in KU</a>
              </div>
            </div>

            {/* Deluxe Card */}
            <div className="bg-brand-dark p-6 md:p-8 border border-brand-red/20 flex flex-col relative overflow-hidden group hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-header font-bold text-white uppercase mb-4 group-hover:text-brand-red transition-colors">The Collector's Choice</h3>
              <p className="text-gray-400 font-sans text-body-mobile md:text-sm mb-6 flex-grow">
                Premium materials. Detailed world-building maps. Character art. Annotated margins.
              </p>
              <ul className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2 flex flex-col mb-8">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Limited run: 500 copies</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Dust jacket</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Interior maps & illustrations</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white text-lg md:text-xl font-header font-bold mb-4">$34.99 <span className="text-[10px] md:text-xs font-normal text-gray-500 align-middle">per book</span></p>
                <a href={BUNDLE_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-brand-red text-brand-red font-bold text-center uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors text-xs inline-block">Pre-Order Deluxe</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookSection;