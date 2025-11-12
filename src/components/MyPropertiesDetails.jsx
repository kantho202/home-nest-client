import React from 'react';
import { useLoaderData } from 'react-router';

const MyPropertiesDetails = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
            this details pages
            {/* <p>Alicia Sciberras Creates Her Dream Designer Looks</p> */}
            <div>
                <div className="left">
                    <img src="" alt="" />
                </div>
                <div className="right">
                    <h2>User Name :{data.name}</h2>
                    <h2>Property Name :{data.property_name}</h2>
                    <h2>Email :{data.email}</h2>
                    <h2>Location :{data.location}</h2>
                    <h2>Description :{data.description}</h2>
                    <h2>Category :{data.category}</h2>
                    <h2>Price :{data.price}</h2>
                    <h2>{data.price}</h2>
                </div>
            </div>
        </div>
    );
};

export default MyPropertiesDetails;