import React from 'react';
import LatestProperties from '../../components/LatestProperties';
import Banner from './Banner';
import WhyChooseUs from './WhyChoseUs';
import OurAgents from './OurAgent';

const latestPropertiesPromise =fetch('http://localhost:3000/latest-properties').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <LatestProperties latestPropertiesPromise={latestPropertiesPromise}></LatestProperties>
           <WhyChooseUs></WhyChooseUs>
           <OurAgents></OurAgents>
        </div>
    );
};

export default Home;