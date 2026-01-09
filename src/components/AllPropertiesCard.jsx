import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AllPropertiesCard = ({ property }) => {
    const { _id, property_name, category, property_image, description, location, property_price } = property
    return (
      

        <div
            data-aos="fade-up"
            className="group relative rounded-[5px] overflow-hidden  shadow-xl border-1 border-[#dce0e0] p-3
         hover:shadow-2xl transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={property_image}
                    alt={property_name}
                    className="w-full h-full rounded-t-[5px] object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                 <div className="relative  top-3 left-3 flex justify-between gap-2">
                    <span className="bg-green-500 -top-58 absolute text-white text-xs px-2 py-1 rounded">
                        {category}
                    </span>
                    {/* <span className="bg-black/70 -top-58 left-82 absolute text-white text-xs px-2 py-1 rounded">
                        {category}
                    </span> */}
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