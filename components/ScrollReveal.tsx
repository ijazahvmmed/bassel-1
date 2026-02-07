import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    duration = 1,
    delay = 0,
    stagger = 0,
    start = 'top 85%',
    triggerOnce = true
}) => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        const elements = container.current.children;

        let fromVars: gsap.TweenVars = {
            opacity: 0,
        };

        let toVars: gsap.TweenVars = {
            opacity: 1,
            duration: duration,
            delay: delay,
            stagger: stagger,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: start,
                toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
            }
        };

        switch (animation) {
            case 'fade-up':
                fromVars.y = 50;
                toVars.y = 0;
                break;
            case 'fade-down':
                fromVars.y = -50;
                toVars.y = 0;
                break;
            case 'fade-left':
                fromVars.x = 50;
                toVars.x = 0;
                break;
            case 'fade-right':
                fromVars.x = -50;
                toVars.x = 0;
                break;
            case 'zoom-in':
                fromVars.scale = 0.8;
                toVars.scale = 1;
                break;
            case 'zoom-out':
                fromVars.scale = 1.2;
                toVars.scale = 1;
                break;
        }

        gsap.fromTo(elements, fromVars, toVars);
    }, { scope: container });

    return (
        <div ref={container} className="w-full">
            {children}
        </div>
    );
};

export default ScrollReveal;
