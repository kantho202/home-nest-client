import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router';

const AllPropertiesCard = ({ property }) => {
    const { _id, property_name, category, property_image, description, location, property_price } = property
    return (
        //    <div className="card bg-base-100 image-full  shadow-sm">
        //         <figure>
        //             <img
        //                 src={property_image}
        //                 alt="Shoes" />
        //         </figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{property_name}</h2>
        //             <p>{description.slice(0,138)}...</p>
        //             <div className='flex justify-end'>
        //                 <p className='font-semibold '>Price : {property_price}</p>
        //                 <p className='font-semibold text-end'>Category : {category}</p>

        //             </div>
        //             <div className="card-actions flex items-center justify-end">
        //                  <p className='font-semibold '>{location}</p>
        //                 <Link to={`/properties-details/${_id}`} className="btn my-btn">View Details</Link>
        //             </div>
        //         </div>
        //     </div>

        <div
            data-aos="fade-up"
            className="h-full flex flex-col rounded-[5px] p-3 border border-[#dce0e0]
             overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative">
                <img
                    src={property_image}
                    alt={property_name}
                    className="w-full h-full rounded-t-[5px] object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="relative  top-3 left-3 flex justify-between gap-2">
                    <span className="bg-green-500 -top-47 absolute text-white text-xs px-2 py-1 rounded">
                        FEATURED
                    </span>
                    <span className="bg-black/70 -top-58 left-82 absolute text-white text-xs px-2 py-1 rounded">
                        {category}
                    </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xl font-bold">${property_price}</p>
                </div>

                {/* Action Icons */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                    <button className="bg-white/80 p-2 rounded-full hover:bg-primary hover:text-white transition">
                        <FaHeart />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
    <h3 className="text-lg font-bold mb-1">{property_name}</h3>

    <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
      <FaMapMarkerAlt /> {location}
    </p>

    <div className="mt-auto flex justify-end">
      <Link className="btn btn-sm bg-red-500 text-white">Details</Link>
    </div>
  </div>
        </div>
    );
};

export default AllPropertiesCard;