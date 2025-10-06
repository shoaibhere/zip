import CustomHomeMain from '@/pages/custom-home/CustomHomeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mon Site - Portfolio Personnalisé",
    description: "Portfolio personnalisé avec showcase WebGL",
};

const page = () => {
    return (
        <CustomHomeMain />
    );
};

export default page;
