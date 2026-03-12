// import React from 'react';
// import { LuArrowRight } from 'react-icons/lu';
// import { useLoaderData } from 'react-router-dom';

// const MyPropertiesDetails = () => {
//     const properties = useLoaderData()
//     console.log(properties)
//     return (
//         <div className='min-w-screen px-10 py-20'>

//             <div className="flex w-full flex-col lg:flex-row">
//                 <div className=" grid  grow place-items">
//                     <img className='' src={properties.user_image} alt="" />
//                     <h1 className='font-bold text-2xl '>Properties Name :{properties.property_name} </h1>

//                 </div>
//                 <div className="divider lg:divider-horizontal"><LuArrowRight size={60} /></div>
//                 <div className=" grid   ">
//                     <p className='pt-5 '><span className=' font-semibold text-[20px] '>Description </span>
//                         : <span className='font-medium text-[15px]'></span>{properties.description} </p>
//                     <p className=' pt-5'>
//                         <span className='font-semibold text-[18px]'>Posted Name</span>
//                         :<span className='font-medium text-[15px]'>{properties.property_name}</span> </p>
//                     <p className=' py-3'>
//                         <span className='font-semibold text-[18px]'>Posted Email</span>
//                         :<span className='font-medium text-[15px]'>{properties.email}</span> </p>
//                     <p className=' py-3'>
//                         <span className='font-semibold text-[18px]'>Price</span>
//                         :<span className='font-medium text-[15px]'>{properties.price} </span>  </p>
//                     <p className=' py-3'>
//                         <span className='font-semibold text-[18px]'>Category</span>
//                         :<span className='font-medium text-[15px]'> {properties.category}</span>  </p>
                           

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyPropertiesDetails;


import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

import { FaUserTie,   FaTag, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router';




import { MdEmail } from "react-icons/md";

const PropertiesDetails = () => {
  const properties = useLoaderData();
  console.log(properties)
  return (
    <div className="min-h-screen  px-5 lg:px-20 py-16">
      <div className='my-5 btn'>
        <Link to={'/'} className='font-semibold font-sans text-xl  '>Go Back</Link>
      </div>
      {/* Hero Section */}
      <div className="relative mb-16 rounded-[5px] overflow-hidden shadow-2xl">
        <img
          src={properties.image}
        //   alt={properties.property_name}
          className="w-full h-[420px] object-cover group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {properties.property_name}
            </h1>
            <p className="text-lg mt-2">
              Category: {properties.category}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Info */}
        <div className="lg:col-span-2  rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
          <p className=" leading-relaxed">
            {properties.description}
          </p>

          <div className="divider my-8">
            <LuArrowRight size={28} />
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-2 gap-6">
            <p>
              <span className="font-semibold">Price:</span>{' '}
              <span className="text- font-bold">
                ${properties.property_price}
              </span>
            </p>
            <p>
              <span className="font-semibold">Category:</span>{' '}
              {properties.category}
            </p>
            <p>
              <span className="font-semibold">Posted Date:</span>{' '}
              {properties.posted_date}
            </p>
          </div>
        </div>

        {/* Agent Card */}
        <div className=" rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#ff3333]/10 flex items-center justify-center mb-4">
            <FaUserTie className="text-[#ff3333] text-3xl" />
          </div>

          <h3 className="text-xl font-bold">
            {/* {properties.posted_by.name} */}
          </h3>
          <p className="text-gray-500 mb-4">Property Agent</p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 justify-center">
              {/* <FaEnvelope /> {properties.posted_by.email} */}
            </p>
            <p className="flex items-center gap-2 justify-center">
             <FaUser/> {properties.name}
            </p>
            <p className="flex items-center gap-2 justify-center">
             <MdEmail /> {properties.email}
            </p>
            <p className="flex items-center gap-2 justify-center">
              <FaTag /> {properties.category}
            </p>
          </div>

          <button className="btn bg-[#ff3333] text-white mt-6 w-full">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
