"use client"
import BlogGridTwoItem from '@/components/blog/subComponents/BlogGridTwoItem';
import BlogListBreadCrumb from '@/components/breadcurmb/BlogListBreadCrumb';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BlogListPagination from '@/components/blog/BlogListPagination';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import blogData from '@/data/blogData';
import { useGSAP } from '@gsap/react';

const BlogGridMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <BlogListBreadCrumb containerCls='container-1330' />
                        <div id="down" className="tp-blog-gird-sidebar-ptb pb-80">
                            <div className="container container-1330">
                                <div className="row">
                                    {
                                        blogData.slice(35, 41).map((blog) => (
                                            <BlogGridTwoItem key={blog.id} blog={blog} colClass='col-lg-4 col-md-6' titleFont='' />
                                        ))
                                    }
                                    <div className="col-lg-12">
                                        <div className="basic-pagination-wrap text-center pt-20">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <BlogListPagination />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <CreativeStudioFooter buttonCls="blog-footer-style" />
                </div>
            </div>
        </>
    );
};

export default BlogGridMain;