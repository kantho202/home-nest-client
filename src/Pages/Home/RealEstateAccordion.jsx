import { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaBuilding, FaChartLine } from "react-icons/fa";

const items = [
  {
    title: "Property Overview",
    icon: <FaHome />,
    content:
      "A modern luxury residence featuring spacious rooms, smart layouts, and premium finishes designed for comfortable urban living.",
  },
  {
    title: "Amenities & Facilities",
    icon: <FaBuilding />,
    content: (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <li>✔ 24/7 Security</li>
        <li>✔ Underground Parking</li>
        <li>✔ Swimming Pool</li>
        <li>✔ Fitness Center</li>
        <li>✔ Power Backup</li>
        <li>✔ High-Speed Elevators</li>
      </ul>
    ),
  },
  {
    title: "Prime Location",
    icon: <FaMapMarkerAlt />,
    content:
      "Situated in a high-demand area with quick access to business hubs, shopping malls, schools, and public transport.",
  },
  {
    title: "Investment Potential",
    icon: <FaChartLine />,
    content:
      "Strong rental demand, steady appreciation, and excellent long-term returns backed by trusted development.",
  },
];

const RealEstateAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Property Highlights
      </h2>

      <div className="space-y-5">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-[10px] border transition-all duration-300 
            ${active === index
              ? "border-[#ff3333] shadow-lg"
              : "border-[#dce0e0] hover:shadow-md"
            }`}
          >
            {/* Header */}
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full
                 bg-blue-100 text-[#ff3333] text-xl">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold">
                  {item.title}
                </span>
              </div>

              <span
                className={`transform transition-transform duration-300 
                ${active === index ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out
              ${active === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6 text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateAccordion;
