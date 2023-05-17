import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Service/Services';
import Reviews from '../Review/Reviews';

const Home = () => {
    return (
        <div className='mx-20'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;