"use client"
import { charAnimation, fadeAnimation, innerServiceAnimation, panelAnimation, servicePanelAnimation, textInvertAnim1, videoAnimation, imageRevealAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceFourHero from '@/components/hero-banner/ServiceFourHero';
import ServiceFourBanner from '@/components/banner/ServiceFourBanner';
import ServiceSolution from '@/components/service/ServiceSolution';
import InnerServiceFour from '@/components/service/InnerServiceFour';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainWork from '@/components/work/HomeMainWork';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ServiceTwoMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            innerServiceAnimation();
            servicePanelAnimation()
            fadeAnimation();
            panelAnimation();
            videoAnimation();
            charAnimation();
            textInvertAnim1();
            imageRevealAnimation();
            scrollMovingText();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red-2'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ServiceFourHero />
                        <ServiceFourBanner />
                        <ServiceSolution />
                        <InnerServiceFour />
                        <HomeMainService />
                        <HomeMainVideo />
                        <HomeMainWork />
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' quikLinkCls="" socialBtnCls='social-btn-cls'/>
                </div>
            </div>
        </>
    );
};

export default ServiceTwoMain;