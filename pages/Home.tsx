import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BeginAdventure from '../components/BeginAdventure';
import BookSection from '../components/BookSection';
import Testimonials from '../components/Testimonials';
import StorySummary from '../components/StorySummary';
import FansOf from '../components/FansOf';
import KeyThemes from '../components/KeyThemes';
import Quotes from '../components/Quotes';
import AboutAuthor from '../components/AboutAuthor';
import FAQ from '../components/FAQ';
import PrequelCTA from '../components/PrequelCTA';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
    // Smooth scroll behavior
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <main className="flex flex-col w-full overflow-x-hidden">
            <Hero />

            <ScrollReveal animation="fade-up" duration={1.2}>
                <BeginAdventure />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={1.2}>
                <BookSection />
            </ScrollReveal>

            {/* These components handle their own internal staggering/animations */}
            <Testimonials />

            <ScrollReveal animation="fade-up" duration={1}>
                <StorySummary />
            </ScrollReveal>

            <FansOf />

            <ScrollReveal animation="fade-up" duration={1}>
                <KeyThemes />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={1}>
                <Quotes />
            </ScrollReveal>

            <AboutAuthor />

            <ScrollReveal animation="fade-up" duration={1}>
                <FAQ />
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" duration={1}>
                <PrequelCTA />
            </ScrollReveal>
        </main>
    );
};

export default Home;
