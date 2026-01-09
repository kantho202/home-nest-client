import React from 'react';
import { FaHome, FaKey, FaBuilding, FaTag } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome className="text-4xl text-center" />,
    title: "Buy a Home",
    description: "Find your dream home from our extensive property listings.",
    bg: "bg-blue-700",
  },
  {
    icon: <FaKey className="text-4xl " />,
    title: "Rent a Property",
    description: "Flexible rental options for apartments, villas, and offices.",
    bg: "bg-green-500",
  },
  {
    icon: <FaTag className="text-4xl " />,
    title: "Sell Your Home",
    description: "Get the best price for your property with our experts.",
    bg: "bg-yellow-500",
  },
  {
    icon: <FaBuilding className="text-4xl " />,
    title: "Commercial Spaces",
    description: "Premium commercial properties in prime locations.",
    bg: "bg-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className=" mb-12">
          Explore our comprehensive real estate services designed for buyers, sellers, and investors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-5 ${service.bg}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
