import React from 'react';
import { Link } from 'react-router';

const MyPropertiesCad = ({myProperty}) => {
    const {user_name,property_price,property_name,location,email,category}=myProperty
    return (
           <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{property_name}</h2>
                <p>{email}</p>
                <div className='flex justify-between'>
                    <p>Category:{category}</p>
               
                <p>Price:{property_price}</p>
                </div>
                <div className="card-actions flex items-center justify-end">
                     <p>{location}</p>
                    <Link  className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MyPropertiesCad;