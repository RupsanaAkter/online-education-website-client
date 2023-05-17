import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import learning from '../../../assets/images/learning.png'
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
    <div 
    style={{
        background: `url(${bg})`,
        backgroundSize: 'cover'
    }}
    className=''>
            <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={learning} className="rounded-lg lg:w-1/3 shadow-2xl" alt='' />
            <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Getting Started</PrimaryButton>
            </div>
        </div>
    </div>
    </div>

    );
};

export default Banner;