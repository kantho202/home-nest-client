import React from 'react';
import { Link } from 'react-router';

const AllPropertiesCard = ({property}) => {
       const {_id, property_name, category,property_image , description, location, property_price } = property
    return (
       <div className="card bg-base-100 image-full  shadow-sm">
            <figure>
                <img
                    src={property_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{property_name}</h2>
                <p>{description.slice(0,138)}...</p>
                <div className='flex justify-between'>
                    <p>Category:{category}</p>
               
                <p>Price:{property_price}</p>
                </div>
                <div className="card-actions flex items-center justify-end">
                     <p>{location}</p>
                    <Link to={`/properties-details/${_id}`} className="btn my-btn">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllPropertiesCard;