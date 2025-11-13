import React from "react";
import { Mail, Phone } from "lucide-react";

const OurAgents = () => {
  const agents = [
    {
      name: "Tanvir Rahman",
      title: "Senior Property Consultant",
      email: "tanvir@homenest.com",
      phone: "+8801712-123456",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Sadia Noor",
      title: "Real Estate Advisor",
      email: "sadia@homenest.com",
      phone: "+8801789-654321",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Arif Hossain",
      title: "Investment Specialist",
      email: "arif@homenest.com",
      phone: "+8801911-987654",
      img: "https://randomuser.me/api/portraits/men/53.jpg",
    },
  ];

  return (
    <section className="py-20 " id="agents">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold  mb-6">
          Meet Our <span className="">Expert Agents</span>
        </h2>
        <p className=" mb-12">
          Our professional and friendly agents are always ready to help you
          find your perfect home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              <img
                src={agent.img}
                alt={agent.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-semibold ">
                {agent.name}
              </h3>
              <p className=" text-sm mb-3">{agent.title}</p>

              <div className="flex justify-center gap-4 ">
                <a
                  href={`mailto:${agent.email}`}
                  className=""
                >
                  <Mail size={18} />
                </a>
                <a
                  href={`tel:${agent.phone}`}
                  className=""
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAgents;
