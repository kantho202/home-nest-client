import React from 'react';
import { useLoaderData } from 'react-router';

const MyPropertiesDetails = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
            this details pages
        </div>
    );
};

export default MyPropertiesDetails;