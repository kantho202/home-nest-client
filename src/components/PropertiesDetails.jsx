import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { useLoaderData } from 'react-router';

const PropertiesDetails = () => {
    const properties = useLoaderData()
    console.log(properties)
    return (
        <div className='  bg-base-200 px-10 py-20'>
            this properties details
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
                    <img src={properties.property_name} alt="" />
                    <h1>{properties.property_name}</h1>
                    
                </div>
                <div className="divider lg:divider-horizontal"><LuArrowRight size={60} /></div>
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
                    <p>{properties.description}</p>
                    </div>
            </div>
        </div>
    );
};

export default PropertiesDetails;