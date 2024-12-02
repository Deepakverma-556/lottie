import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../assets/lottie/lottie-animation.json"
import chain from "../assets/lottie/chain.json"
import construction from "../assets/lottie/construction.json"
import dog from "../assets/lottie/dog.json"
const About = () => {
    return (
        <section className='py-4 px-4'>
            <h2 className='font-semibold text-3xl pb-5'>This is Lottie Animation</h2>
            <div className='flex sm:justify-between max-sm:flex-wrap items-center gap-4 max-sm:gap-0'>

            <Lottie animationData={animationData} loop={true} autoplay={true} className='w-64 mx-auto' />
            <Lottie animationData={chain} loop={true} autoplay={true} className='w-64 mx-auto' />
            <Lottie animationData={construction} loop={true} autoplay={true} className='w-64 mx-auto' />
            <Lottie animationData={dog} loop={true} autoplay={true} className='w-64 mx-auto' />
            </div>
        </section>
    )
}

export default About