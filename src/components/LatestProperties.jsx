import React, { use } from 'react';
import PropertiesCard from './PropertiesCard';

const LatestProperties = ({latestPropertiesPromise}) => {
    const properties =use(latestPropertiesPromise)
    // console.log(properties)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-15 max-w-7xl mx-auto'>
            {
                properties.map(property=><PropertiesCard key={property._id} property={property}></PropertiesCard>)
            }
        </div>
    );
};

export default LatestProperties;