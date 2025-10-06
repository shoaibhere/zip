'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';

// Animation Hooks
import { fadeAnimation, portfolioShowcaseAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';

// Layout Components
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';

// Page Sections
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase';
import AboutModernHero from '@/components/hero-banner/AboutModernHero';

const CustomHomeMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            portfolioShowcaseAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <AboutModernHero heroTitle="Portfolio" />
                        <PortfolioShowcase />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default CustomHomeMain;
