import Link from 'next/link';
import React from 'react';

const DigitalMarketingStep = () => {
    return (
        <div className="dgm-step-area pb-50">
            <div className="container container-1230">
                <div className="row align-items-end">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="dgm-step-item p-relative dgm-step-space-1 mb-80">
                            <h4 className="dgm-step-title mb-25">Explore the <br /> creative process</h4>
                            <Link className="tp-btn-yellow-green green-solid" href="/contact">
                                <i>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.4221 8.95389C1.66368 7.63144 1.29748 6.55158 1.07667 5.45697C0.750098 3.83806 1.49745 2.25665 2.7355 1.24758C3.25876 0.821106 3.85858 0.966814 4.168 1.52192L4.86655 2.77513C5.42023 3.76845 5.69707 4.26511 5.64216 4.79167C5.58725 5.31823 5.21389 5.74709 4.46718 6.6048L2.4221 8.95389ZM2.4221 8.95389C3.9572 11.6306 6.36627 14.041 9.04611 15.5779M9.04611 15.5779C10.3686 16.3363 11.4484 16.7025 12.543 16.9233C14.1619 17.2499 15.7434 16.5026 16.7524 15.2645C17.1789 14.7412 17.0332 14.1414 16.4781 13.832L15.2249 13.1335C14.2315 12.5798 13.7349 12.3029 13.2083 12.3578C12.6818 12.4127 12.2529 12.7861 11.3952 13.5328L9.04611 15.5779Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M10.6001 4.86548C11.7387 5.34899 12.6511 6.26142 13.1346 7.4M11.1233 1C13.9531 1.81661 16.1834 4.04682 17.0001 6.8765" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </i>
                                <span>
                                    <span className="text-1">Call for Joining</span>
                                    <span className="text-2">Call for Joining</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="dgm-step-item p-relative dgm-step-space-2 mb-80">
                            <span className="dgm-step-number">01</span>
                            <h4 className="dgm-step-title-sm">Research</h4>
                            <p>
                                Focussed on understanding
                                your business requirements,
                                users and problems
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="dgm-step-item p-relative dgm-step-space-3 mb-80">
                            <span className="dgm-step-number">02</span>
                            <h4 className="dgm-step-title-sm">Ideation & design</h4>
                            <p>
                                In this stage we work closely to
                                come up with lots of solutions &
                                finalize design
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="dgm-step-item p-relative dgm-step-space-4 mb-80">
                            <span className="dgm-step-number">03</span>
                            <h4 className="dgm-step-title-sm">Development</h4>
                            <p>
                                I develop your product in
                                Webflow and help you with
                                maintaining it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingStep;