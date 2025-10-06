import InnerServiceFourItem from './subComponents/InnerServiceFourItem';
import { ServiceShapeIcon } from '@/svg/ServiesIcons';
import servicesData from '@/data/serviceData';
import React from 'react';

const InnerServiceFour = () => {
    return (
        <div className="dgm-service-area dgm-service-radius pt-120 z-index-1">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="dgm-service-title-box service-4-heading z-index-1 mb-70">
                            <h2 className="tp-section-title-grotesk text-black tp_fade_anim" data-delay=".5">
                            Ces défis vous empêchent d'avancer ?
                            </h2>
                            
                        </div>
                    </div>
                </div>
                <div className="dgm-service-wrap dgm-service-white">
                    <div className="row">
                        <div className="col-xl-12">
                            {servicesData.slice(4, 8).map((service) => (
                                <InnerServiceFourItem key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                    <p>Nous comprenons ces défis car nous les résolvons chaque jour.</p>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceFour;