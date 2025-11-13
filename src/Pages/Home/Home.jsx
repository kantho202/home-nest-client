import React from 'react';
import LatestProperties from '../../components/LatestProperties';
import Banner from './Banner';
import WhyChooseUs from './WhyChoseUs';

const latestPropertiesPromise =fetch('http://localhost:3000/latest-properties').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <LatestProperties latestPropertiesPromise={latestPropertiesPromise}></LatestProperties>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;