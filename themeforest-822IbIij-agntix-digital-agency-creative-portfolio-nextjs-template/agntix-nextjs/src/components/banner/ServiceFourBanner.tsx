import aboutThumb from '../../../public/assets/img/about-us/about-us-4/about-us-4-thumb-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceFourBanner = () => {
    return (
        <div className="tp-service-4-banner-area p-relative">
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-4-banner-breadcrumb p-relative pb-25">
                            <span><Link href="/">Accueil</Link></span>{" "}
                            <span>Référencement SEO et GEO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ar-banner-wrap ar-about-us-4">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" src={aboutThumb} alt="about thumb" data-speed=".8" />
            </div>
        </div>
    );
};

export default ServiceFourBanner;