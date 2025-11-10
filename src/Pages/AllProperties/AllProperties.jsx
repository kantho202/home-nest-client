import React from 'react';
import { useLoaderData } from 'react-router';
import AllPropertiesCard from '../../components/AllPropertiesCard';

const AllProperties = () => {
    const properties =useLoaderData()
    console.log(properties)
    
    return (
       
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-15 max-w-7xl mx-auto'>
            {
                properties.map(property=><AllPropertiesCard key={property._id} property={property}></AllPropertiesCard>)
            }
          </div>
    );
};

export default AllProperties;