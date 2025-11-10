import React from 'react';
import { useLoaderData } from 'react-router';

const PropertiesDetails = () => {
    const properties =useLoaderData()
    console.log(properties)
    return (
        <div>
            this properties details
        </div>
    );
};

export default PropertiesDetails;