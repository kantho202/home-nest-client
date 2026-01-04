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

const latestPropertiesPromise =fetch('http://localhost:3000/latest-properties').then(res=>res.json())

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