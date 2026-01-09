// import React from 'react';
// import { Link } from 'react-router';

// const PropertiesCard = ({ property }) => {
//     const { _id, property_name, category, property_image, description, location, property_price } = property
//     return (
//         <div data-aos="fade-down"
//             data-aos-easing="linear"
//             data-aos-duration="1000" className="card bg-base-100 image-full  shadow-sm">
//             <figure>
//                 <img
//                     src={property_image}
//                     alt="Shoes" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">{property_name}</h2>
//                 <p>{description.slice(0, 138)}...</p>
//                 <div className='flex justify-end'>
//                     <p className='font-semibold '>Price : {property_price}</p>
//                     <p className='font-semibold text-end'>Category : {category}</p>

//                 </div>
//                 <div className="card-actions flex items-center justify-end">
//                     <p className='font-semibold'>{location}</p>
//                     <Link to={`/properties-details/${_id}`} className="btn my-btn">View Details</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertiesCard;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const PropertiesCard = ({ property }) => {
    const {
        _id,
        property_name,
        category,
        property_image,
        description,
        location,
        property_price
    } = property;
    const [heart, setHeart] = useState(false)
    const handleHeartCount = () => {
        console.log('clicked')
        setHeart(!heart)
    }
    return (
        <div
            data-aos="fade-up"
            className='group relative rounded-[5px] overflow-hidden  shadow-xl border-1 border-[#dce0e0] p-3
         hover:shadow-2xl transition-all duration-500'
            // className=" border-1 border-[#dce0e0] p-3 rounded-[5px] overflow-hidden
            //  shadow-md hover:shadow-[5px] transition-all duration-300"
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
                    <button
                        onClick={handleHeartCount}
                        className={`bg-white/80 p-2 rounded-full hover:bg-primary cursor-pointer
                     hover:text-white transition ${heart ? "bg-primary text-white scale-110" : "bg-white/80"}`}>
                        <FaHeart />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold mb-1">
                    {property_name}
                </h3>

                <p className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaMapMarkerAlt /> {location}
                </p>

                {/* Features */}
                {/* <div className="flex justify-between text-sm text-gray-600 border-y py-3 mb-4">
          <span className="flex items-center gap-1">
            <FaBed /> 4
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> 2
          </span>
          <span className="flex items-center gap-1">
            <FaRulerCombined /> 1200 SqFt
          </span>
        </div> */}

                {/* Category + Button */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold  px-3 py-1 rounded-full">
                        {/* {category} */}
                    </span>

                    <Link
                        to={`/properties-details/${_id}`}
                        className="btn btn-sm my-btn hover:bg-red-600 text-white border-none"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCard;
