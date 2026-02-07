import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 relative text-white">
      <div className="container mx-auto px-6 md:px-12 md:pl-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Discover / Books Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-header font-bold text-white uppercase tracking-widest mb-2 border-b border-brand-red pb-2 inline-block w-full">Discover</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Iron Crown (Book 1)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Ashen Throne (Book 2)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Book 3: Expansion War</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Book 4: Legacy Reckoning</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-header font-bold text-white uppercase tracking-widest mb-2 border-b border-brand-red pb-2 inline-block w-full">Shop</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Signed Copies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Merch Store</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Kickstarter (Future)</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-header font-bold text-white uppercase tracking-widest mb-2 border-b border-brand-red pb-2 inline-block w-full">Community</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">TikTok</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Reddit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Twitter/X</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Royal Road</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-header font-bold text-white uppercase tracking-widest mb-2 border-b border-brand-red pb-2 inline-block w-full">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Fief Maps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Character Art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">God Orb System FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">World Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">Character Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-sans text-sm tracking-wide">System Mechanics</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 font-sans text-sm text-center md:text-left">
            <p>Copyright {new Date().getFullYear()} B. Salem LLC. All rights reserved.</p>
            <p className="mt-1">The Elder Lands is a trademark of B. Salem LLC.</p>
          </div>
          <div className="flex gap-8 text-gray-500 font-sans text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>
          <div className="text-brand-red font-header text-xs tracking-widest uppercase">
            Made with ❤️ by readers, for readers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;