import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { FaUserTie, FaEnvelope, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const PropertiesDetails = () => {
  const properties = useLoaderData();

  return (
    <div className="min-h-screen  px-5 lg:px-20 py-16">

      {/* Hero Section */}
      <div className="relative mb-16 rounded-[5px] overflow-hidden shadow-2xl">
        <img
          src={properties.property_image}
          alt={properties.property_name}
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
              <span className="text-primary font-bold">
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
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FaUserTie className="text-primary text-3xl" />
          </div>

          <h3 className="text-xl font-bold">
            {properties.posted_by.name}
          </h3>
          <p className="text-gray-500 mb-4">Property Agent</p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 justify-center">
              <FaEnvelope /> {properties.posted_by.email}
            </p>
            <p className="flex items-center gap-2 justify-center">
              <FaCalendarAlt /> {properties.posted_date}
            </p>
            <p className="flex items-center gap-2 justify-center">
              <FaTag /> {properties.category}
            </p>
          </div>

          <button className="btn btn-primary mt-6 w-full">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
