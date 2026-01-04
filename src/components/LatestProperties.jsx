import React, { use } from 'react';
import PropertiesCard from './PropertiesCard';

const LatestProperties = ({ latestPropertiesPromise }) => {
    const properties = use(latestPropertiesPromise)
    // console.log(properties)
    return (
        <div className='py-20 px-8 '>
           <div className='text-center '>
             <h2 className="text-4xl font-bold  mb-6">
                Featured Real Estate 
            </h2>
            <p className=" max-w-2xl mx-auto mb-12">
                Your trusted real estate partner for buying, selling, and investing —
                with reliability and transparency.
            </p>
           </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3  '>
                {
                    properties.map(property => <PropertiesCard  key={property._id} property={property}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default LatestProperties;