import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowTwentyOne } from '@/svg/ArrowIcons';
import { servicesDT } from '@/types/service-d-t';
import servicesData from '@/data/serviceData';
import Link from 'next/link';
import React from 'react';

const ServiceSolution = () => {

    const ServiceCard = ({ service }: { service: servicesDT }) => (
        <div className="swiper-slide">
            <div className="tp-service-4-solution-item mb-30">
                <div className="tp-service-4-solution-item-icon">
                    <span>{service.svgIcon && <service.svgIcon />}</span>
                </div>
                <div className="tp-service-4-solution-item-content">
                    <h4 className="tp-service-4-solution-item-title">
                        <Link className="tp-line-black" href={service.link}>
                            {service.title}
                        </Link>
                    </h4>
                    <p>{service.description}</p>
                </div>
                <div className="tp-service-4-solution-item-btn">
                    <Link className="tp-line-black" href={service.link}>
                        View Details <span><ArrowTwentyOne /></span>
                    </Link>
                </div>
            </div>
        </div>
    );

    
};

export default ServiceSolution;