import React from 'react';
import LatestProperties from '../../components/LatestProperties';
import Banner from './Banner';
import WhyChooseUs from './WhyChoseUs';
import OurAgent from './OurAgent';
import Contact from './Contact';
import ServicesSection from './ServiceSection';
import ImageGrid from './ImageGrid';
import RealEstateAccordion from './RealEstateAccordion';
import PropertyFeatureSection from './PropertyFeatureSection';
import RealEstateShowcase from './RealEstateShowcase ';

<<<<<<< HEAD
const latestPropertiesPromise =fetch('https://home-nest-cyan.vercel.app/latest-properties').then(res=>res.json())
=======
const latestPropertiesPromise =fetch('http://localhost:3000/latest-properties').then(res=>res.json())
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           
        <LatestProperties latestPropertiesPromise={latestPropertiesPromise}></LatestProperties>
           <WhyChooseUs></WhyChooseUs>
           <ServicesSection></ServicesSection>
           <OurAgent></OurAgent>
           <ImageGrid></ImageGrid>
           <PropertyFeatureSection></PropertyFeatureSection>
           <RealEstateShowcase></RealEstateShowcase>
           <Contact></Contact>
           <RealEstateAccordion></RealEstateAccordion>
        </div>
    );
};

export default Home;