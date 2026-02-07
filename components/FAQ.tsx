import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-6 flex justify-between items-center group focus:outline-none"
            >
                <span className="text-xl md:text-2xl font-header font-bold text-white uppercase group-hover:text-brand-red transition-colors pr-8">
                    {question}
                </span>
                <span className={`text-brand-red transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 font-sans text-lg leading-relaxed max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "Is this grimdark or dark fantasy?",
            a: "Serious and unafraid of consequences—but not nihilistic. People die. Failures matter. But the story is about building something despite the cost, not surviving despair. Think realistic medieval rather than hopeless grimdark."
        },
        {
            q: "How much romance is in this series?",
            a: "Relationships matter—companions, allies, family bonds—but they serve the kingdom-building narrative, not romance tropes. The emotional focus is on leadership growth and family legacy."
        },
        {
            q: "Is Lucan exiled or cursed?",
            a: "No. Lucan is a young heir to a modest fief, blessed with rare power and attempting to elevate his family's legacy. The tension comes from his ambition clashing with his father's caution—not from victimhood."
        },
        {
            q: "How crunchy is the system?",
            a: "Crunchy enough to satisfy system junkies. God Orbs, limited Skill slots, Vital Orb progression (10 for Physique tier), hybrid Skills. But mechanics serve story, never overshadow it."
        },
        {
            q: "Are all 4 books published? No waiting?",
            a: "Books 1–2 are published in Kindle Unlimited, Audible, paperback, and hardcover. Books 3–4 are coming in 2026. No cliffhangers between published books—each has a complete arc with satisfying closure."
        },
        {
            q: "What makes Elder Lands different from Cradle?",
            a: "While both feature mentor-apprentice dynamics, Elder Lands centers on active father-son opposition—not distant mentorship. Sir Golan actively disagrees with Lucan's ambitions, creating genuine conflict. Additionally, Elder Lands emphasizes kingdom-building economics and settlement management."
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6 md:px-12 md:pl-32">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-4">Frequently Asked Questions</h2>
                    <div className="h-1 w-24 bg-brand-red mb-6"></div>
                </div>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
