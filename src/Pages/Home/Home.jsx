import React from 'react';
import LatestProperties from '../../components/LatestProperties';
import Banner from './Banner';
import WhyChooseUs from './WhyChoseUs';
import OurAgent from './OurAgent';
import Contact from './Contact';

const latestPropertiesPromise =fetch('https://home-nest-cyan.vercel.app//latest-properties').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <LatestProperties latestPropertiesPromise={latestPropertiesPromise}></LatestProperties>
           <WhyChooseUs></WhyChooseUs>
           <OurAgent></OurAgent>
           <Contact></Contact>
        </div>
    );
};

export default Home;