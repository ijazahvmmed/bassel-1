import React from 'react';

const BookSection: React.FC = () => {
  return (
    <section id="books" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 md:pl-32">

        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-4">The Elder Lands Series</h2>
          <div className="h-1 w-24 bg-brand-red mb-6 md:mx-0 mx-auto"></div>

        </div>

        <div className="flex flex-col gap-24">

          {/* Book 1 Card */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-brand-dark/20 p-8 border border-white/5 relative group hover:border-brand-red/30 transition-colors">
            <div className="w-full md:w-1/3 relative aspect-[2/3] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="https://picsum.photos/600/900?grayscale&random=1" alt="Book 1 Cover" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl font-header font-bold text-white uppercase">The Elder Lands – Book 1</h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed">
                When Lucan Zesh inherits four rare Skill slots, he doesn't know yet that ambition and wisdom are not the same thing.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> 1,500 reviews, 4.75 stars</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 12h 45min professional narration</span>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-gray-500 line-through text-lg font-sans">$29.99</span>
                <span className="text-brand-red text-2xl font-bold font-header tracking-widest">$14.99</span>
              </div>

              <div className="mt-4">
                <button className="bg-white text-black font-bold uppercase tracking-widest px-8 py-3 hover:bg-brand-red hover:text-white transition-colors">Order on Audible</button>
                <a href="#" className="ml-6 text-white uppercase text-sm font-bold tracking-widest border-b border-white hover:text-brand-red hover:border-brand-red transition-colors pb-1">View Details</a>
              </div>
            </div>
          </div>

          {/* 2-Book Bundle Card */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center bg-brand-dark/20 p-8 border border-white/5 relative group hover:border-brand-red/30 transition-colors">
            <div className="w-full md:w-1/3 relative aspect-[4/3] overflow-hidden shadow-2xl border border-white/10 p-2 bg-black">
              <img src="https://picsum.photos/800/600?grayscale&random=2" alt="Bundle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-6 md:text-right md:items-end">
              <h3 className="text-3xl md:text-4xl font-header font-bold text-white uppercase">2-Book Signed Bundle</h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed md:pl-12">
                2 books. One family legacy. Genuine growth born from conflict. Perfect for binge readers.
              </p>

              <ul className="flex flex-col md:items-end gap-2 text-gray-400 font-sans text-sm">
                <li>Signed First Edition</li>
                <li>2 volumes, 380 pages each</li>
                <li>Premium interior with fief maps</li>
              </ul>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-brand-red text-2xl font-bold font-header tracking-widest">$11.98</span>
                <span className="text-green-500 text-sm font-bold uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Save 20%</span>
              </div>

              <div className="mt-4">
                <button className="bg-transparent border border-white text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-brand-red hover:border-brand-red transition-colors">Order Signed Bundle</button>
              </div>
            </div>
          </div>

          {/* Grid for KU and Deluxe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KU Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 border border-white/10 flex flex-col relative overflow-hidden group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-full -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-header font-bold text-white uppercase mb-4 group-hover:text-brand-red transition-colors">Binge the Father-Son Epic</h3>
              <p className="text-gray-400 font-sans text-sm mb-6 flex-grow">
                2 books. Binge the entire father-son epic. Free with Kindle Unlimited Membership.
              </p>
              <ul className="text-gray-500 text-xs font-bold uppercase tracking-widest gap-2 flex flex-col mb-8">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> All 2 books in KU</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Whispersync enabled</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> No waiting</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white text-xl font-header font-bold mb-4">Free with KU <span className="text-xs font-normal text-gray-500 align-middle">or $3.99/book</span></p>
                <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors text-xs">Get Book 1 Free in KU</button>
              </div>
            </div>

            {/* Deluxe Card */}
            <div className="bg-brand-dark p-8 border border-brand-red/20 flex flex-col relative overflow-hidden group hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-2xl font-header font-bold text-white uppercase mb-4 group-hover:text-brand-red transition-colors">The Collector's Choice</h3>
              <p className="text-gray-400 font-sans text-sm mb-6 flex-grow">
                Premium materials. Detailed world-building maps. Character art. Annotated margins.
              </p>
              <ul className="text-gray-500 text-xs font-bold uppercase tracking-widest gap-2 flex flex-col mb-8">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Limited run: 500 copies</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Dust jacket</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Interior maps & illustrations</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white text-xl font-header font-bold mb-4">$34.99 <span className="text-xs font-normal text-gray-500 align-middle">per book</span></p>
                <button className="w-full py-3 border border-brand-red text-brand-red font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors text-xs">Pre-Order Deluxe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookSection;