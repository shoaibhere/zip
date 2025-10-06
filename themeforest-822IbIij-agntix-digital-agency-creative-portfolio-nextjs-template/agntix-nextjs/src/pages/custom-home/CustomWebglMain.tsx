"use client"
import { addEvents, slideNextTransitionStart, slidePrevTransitionStart, verTextFragment } from '@/utils/WebglAnim';
import { customPortfolioWebglSlides, customSliderImages } from '@/data/customPortfolioData';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import { WebGL } from '@/plugins';
import Image from 'next/image';
import Link from 'next/link';

const CustomWebglMain = () => {
    const webGLContainerRef = useRef<HTMLDivElement>(null);
    // Set background color & cursor
    useCursorAndBackground({ bgColor: "#000" });

    useEffect(() => {
        if (webGLContainerRef.current) {
            const webGL = new WebGL({
                vertex: verTextFragment().vertex,
                fragment: verTextFragment().fragment,
            });
            // Instantiate WebGL
            addEvents(webGL)
            webGLContainerRef.current.appendChild(webGL.renderer.domElement);
            return () => {
                webGL.stop();
            };
        }
    }, []);

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />
            <main>
                <div id="port-showcase-slider-main">
                    <div className="port-showcase-slider-spaces p-relative">
                        <div className="port-showcase-slider-wrap tp-slider-parallax fix" id="showcase-slider-holder"
                            data-pattern-img="assets/img/webgl/1.jpg">
                            <div id="showcase-slider" className="swiper-container parallax-slider-active-2 p-relative">
                                <Swiper
                                    direction="horizontal"
                                    slidesPerView="auto"
                                    touchStartPreventDefault={false}
                                    speed={1000}
                                    effect="fade"
                                    loop={true}
                                    mousewheel={true}
                                    simulateTouch={true}
                                    navigation={{
                                        nextEl: '.swiper-next',
                                        prevEl: '.swiper-prev',
                                    }}
                                    pagination={{
                                        el: '.tp-slider-dot',
                                        clickable: true,
                                    }}
                                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                                    onSlidePrevTransitionStart={slidePrevTransitionStart}
                                    onSlideNextTransitionStart={slideNextTransitionStart}
                                    id="trigger-slides"
                                >
                                    {customPortfolioWebglSlides.map((item, i) => (
                                        <SwiperSlide key={item.id}>
                                            <div 
                                                className={`slide-wrap ${i === 0 ? 'active' : ''}`} 
                                                data-slide={i}
                                                style={i === 0 ? {
                                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/assets/img/pexels-slendyalex-3648850.jpg')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                } : {}}
                                            ></div>
                                            <div className="container" style={{ maxWidth: '1600px' }}>
                                                <div className="row justify-content-center">
                                                    <div className="col-xl-12">
                                                        <div className="port-showcase-slider-item">
                                                            <div className="port-showcase-slider-content text-center" style={{ padding: '0 2rem' }}>
                                                                <span className="port-showcase-slider-subtitle">
                                                                    <span>[ {item.categories.join(", ")} ]</span>
                                                                </span>
                                                                <Link href={item.link}>
                                                                    <h1 className="port-showcase-slider-title" style={{ 
                                                                        fontSize: 'clamp(2.5rem, 6vw, 6rem)', 
                                                                        lineHeight: '1.1', 
                                                                        marginBottom: '2rem',
                                                                        fontWeight: '200',
                                                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                                                        letterSpacing: '-0.02em',
                                                                        whiteSpace: 'nowrap',
                                                                        fontFamily: 'var(--font-inter)'
                                                                    }}>
                                                                        <span>{item.title}</span>
                                                                    </h1>
                                                                </Link>
                                                                {item.subtitle && (
                                                                    <p className="port-showcase-slider-description" style={{ 
                                                                        fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', 
                                                                        color: '#fff', 
                                                                        opacity: 0.95,
                                                                        marginTop: '2rem',
                                                                        fontWeight: '300',
                                                                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                                                        maxWidth: '1200px',
                                                                        margin: '2rem auto 0',
                                                                        fontFamily: 'var(--font-inter)'
                                                                    }}>
                                                                        {item.subtitle}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="tp-showcase-arrow-box d-flex justify-content-between">
                                <button className="tp-showcase__button-prev swiper-prev d-inline-flex align-items-center">
                                    <span>Précédant</span>
                                </button>
                                <button className="tp-showcase__button-next swiper-next d-inline-flex align-items-center">
                                    <span>Suivant</span>
                                </button>
                            </div>
                            <div className="tp-slider-dot d-none d-md-block"></div>
                        </div>
                    </div>
                </div>
                {/*  canvas slider */}
                <div id="canvas-slider" className="canvas-slider" ref={webGLContainerRef}>
                    {customSliderImages.map((imgSrc, index) => (
                        <div key={index} className="slider-img" data-slide={index}>
                            <Image
                                className="slide-img"
                                src={imgSrc}
                                alt="showcase-img"
                                style={{ height: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default CustomWebglMain;
