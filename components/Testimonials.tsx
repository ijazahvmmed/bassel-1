import React from 'react';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-black relative">
            <div className="absolute inset-0 bg-white/5 opacity-50" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-h1-mobile md:text-5xl lg:text-h1-desktop font-header font-bold text-white uppercase mb-4">Loved by Progression Fantasy Readers</h2>
                        <div className="h-1 w-24 bg-brand-red mx-auto"></div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" stagger={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-brand-dark p-6 md:p-8 border border-white/10 relative">
                            <svg className="absolute top-4 left-4 w-8 h-8 text-brand-red opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" /></svg>
                            <p className="text-gray-300 font-sans italic text-body-mobile md:text-sm leading-relaxed mb-6 mt-4">
                                "Finally, a protagonist who doubts himself. I've read Cradle. I've devoured The Wandering Inn. I thought I understood mentor-apprentice dynamics. Then I read The Elder Lands. Lucan's relationship with his father isn't convenient plot tension—it's the heart of the story."
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">M. Chen, Verified Reader</p>
                                <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider">Royal Road | 100K pages read</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-brand-dark p-6 md:p-8 border border-white/10 relative">
                            <svg className="absolute top-4 left-4 w-8 h-8 text-brand-red opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" /></svg>
                            <p className="text-gray-300 font-sans italic text-body-mobile md:text-sm leading-relaxed mb-6 mt-4">
                                "Cradle meets Wandering Inn meets politics. This is what progression fantasy should be—messy, emotional, human. If you love Cradle's mentor tension, Wandering Inn's settlement economics, and He Who Fights with Monsters' crunchy system, you'll be obsessed with Elder Lands."
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">J. Williams, Verified Reader</p>
                                <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider">Goodreads | 4.75 stars</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-brand-dark p-6 md:p-8 border border-white/10 relative">
                            <svg className="absolute top-4 left-4 w-8 h-8 text-brand-red opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" /></svg>
                            <p className="text-gray-300 font-sans italic text-body-mobile md:text-sm leading-relaxed mb-6 mt-4">
                                "The refugee arc is devastating. Economic stakes are REAL. By book three, Lucan's competence feels genuinely earned. Not a chosen one narrative—just a young heir learning that ambition without wisdom is catastrophe with a sword."
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">K. Thompson, Verified Reader</p>
                                <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider">Amazon Reviews | Kindle Unlimited</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Social Proof Stats */}
                <ScrollReveal animation="fade-up" stagger={0.15}>
                    <div className="mt-10 md:mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-6 md:gap-16">
                        <div className="text-center">
                            <span className="block text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white">1,500+</span>
                            <span className="text-[8px] md:text-xs text-brand-red uppercase tracking-widest">5-Star Reviews</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white">100K+</span>
                            <span className="text-[8px] md:text-xs text-brand-red uppercase tracking-widest">Pages Read</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white">4.75</span>
                            <span className="text-[8px] md:text-xs text-brand-red uppercase tracking-widest">Average Rating</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-h2-mobile md:text-4xl lg:text-h2-desktop font-header font-bold text-white">4</span>
                            <span className="text-[8px] md:text-xs text-brand-red uppercase tracking-widest">Complete Books</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Testimonials;
