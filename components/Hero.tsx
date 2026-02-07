import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    tl.fromTo(bannerRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.5 })
      .fromTo(titleRef.current, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 0.9, y: 0, scale: 1 }, "-=0.8")
      .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, "-=0.6")
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.8")
      .fromTo(buttonsRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 }, "-=0.8");
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-[600px] md:h-screen w-full overflow-hidden bg-black flex items-center justify-center py-16 md:py-0">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <p ref={bannerRef} className="text-brand-red font-header font-bold tracking-[0.5em] mb-4 md:mb-6 text-xs md:text-base uppercase opacity-0">
          Two books available now. Don't wait—book now.
        </p>

        <h1 ref={titleRef} className="text-hero-mobile md:text-6xl lg:text-hero-desktop font-header font-bold text-white tracking-tighter mb-6 uppercase mix-blend-overlay opacity-0 drop-shadow-2xl">
          Get Lost in Your Next Kingdom-Building Epic
        </h1>

        <div ref={lineRef} className="h-1 w-24 bg-brand-red mx-auto my-6 md:my-8 origin-center opacity-100"></div>

        <p ref={subtitleRef} className="text-gray-300 font-sans text-body-mobile md:text-xl tracking-widest max-w-3xl mx-auto mb-8 md:mb-12 shadow-black drop-shadow-md opacity-0">
          Ambitious heir. Pragmatic father. One fief. Infinite consequences. <br className="hidden md:block" /> Four books. Zero cliffhangers. Zero exile tropes.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <button className="group relative px-8 py-4 bg-brand-red border border-brand-red overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)] opacity-0">
            <span className="relative z-10 font-header font-bold tracking-widest text-white uppercase flex items-center gap-2 justify-center">
              Read Free in KU
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>

          <button className="group relative px-8 py-4 bg-transparent border border-white/30 overflow-hidden transition-all hover:border-white hover:bg-white/10 opacity-0">
            <span className="relative font-header font-bold tracking-widest text-white uppercase flex items-center gap-2 justify-center">
              Listen on Audible
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer z-10" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-[10px] tracking-widest font-header text-gray-400">BEGIN ADVENTURE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;