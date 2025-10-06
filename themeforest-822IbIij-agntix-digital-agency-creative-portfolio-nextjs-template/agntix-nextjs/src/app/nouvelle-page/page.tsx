import CustomWebglMain from '@/pages/custom-home/CustomWebglMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nouvelle Page - Portfolio WebGL Showcase",
    description: "Portfolio avec effets WebGL et menu du index",
};

const page = () => {
    return (
        <CustomWebglMain />
    );
};

export default page;
