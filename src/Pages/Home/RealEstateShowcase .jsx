import { FaHome, FaBuilding, FaWarehouse, FaUsers } from "react-icons/fa";

const RealEstateShowcase = () => {
  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-24">

        {/* ================= Categories ================= */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Property Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaHome />, title: "Apartments" },
              { icon: <FaBuilding />, title: "Commercial" },
              { icon: <FaWarehouse />, title: "Warehouses" },
              { icon: <FaUsers />, title: "Family Homes" },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-[10px]  p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-blue-100 text-[#ff3333] flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Highlights ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Prime Locations",
              desc: "Carefully selected properties in high-demand urban areas.",
            },
            {
              title: "Trusted Developers",
              desc: "Verified projects from reliable and experienced builders.",
            },
            {
              title: "Smart Investment",
              desc: "High rental yield and long-term appreciation value.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[10px] p-8 shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= Statistics ================= */}
        <div className="rounded-2xl bg-red-500 text-white py-14 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,500+", label: "Properties Listed" },
              { value: "1,200+", label: "Happy Clients" },
              { value: "15+", label: "Cities Covered" },
              { value: "8 Years", label: "Industry Experience" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-sm opacity-90 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Testimonials ================= */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Rahman",
                text:
                  "The entire buying process was smooth and transparent. Highly professional service.",
              },
              {
                name: "Sara Khan",
                text:
                  "Great property options in prime locations. I found my dream home easily.",
              },
              {
                name: "Michael Lee",
                text:
                  "Excellent investment advice and strong market knowledge.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[10px]  p-6 shadow-sm hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-4 leading-relaxed">
                  “{item.text}”
                </p>
                <p className="font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealEstateShowcase;
