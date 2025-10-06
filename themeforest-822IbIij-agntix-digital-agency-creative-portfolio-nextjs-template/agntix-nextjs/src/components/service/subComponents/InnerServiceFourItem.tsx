import { servicesDT } from "@/types/service-d-t";
import React from 'react';

interface ServicePropsDT {
    service: servicesDT
}

const InnerServiceFourItem = ({ service }: ServicePropsDT) => {

    return (
        <div key={service.id} className="service-item-simple w-100 p-relative">
            <div className="row">
                <div className="col-12">
                    <h3 className="service-title">
                        {service.title}
                    </h3>
                    <p className="service-description">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceFourItem;