import footerShape from "../../../../public/assets/img/home-01/footer/footer-shape-1.png";
import { getCurrentYear } from "@/utils/getCurrentYear";
import Image from 'next/image';
import React from 'react';
import Link from "next/link";

const HomeFooterCopyright = ({ bgColor }: { bgColor?: string }) => {
    return (
        <div className="tp-copyright-area" style={{ backgroundColor: bgColor }}>
            <div className="container">

                <div className="tp-copyright-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div >
                                <span>© 2025 · Sitegrow. · Tous droits réservés.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-copyright-right text-center text-sm-end">
                                <Link href="#">Politique de confidentialité</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooterCopyright;