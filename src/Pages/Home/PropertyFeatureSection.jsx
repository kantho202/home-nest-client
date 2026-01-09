import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const PropertyFeatureSection = () => {
  return (
    <section className="relative  py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Discover Your Dream Property
          </h2>
          <p className=" text-lg">
            Premium residences designed for comfort, location, and long-term value.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[320px] sm:h-[420px] rounded-[10px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Property"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Info Card */}
          <div className="relative">
            <div className="backdrop-blur-xl  border-[#dce0e0] rounded-[10px] p-8 shadow-xl">

              <span className="inline-block mb-3 text-sm font-semibold text-[#ff3333]">
                Featured Property
              </span>

              <h3 className="text-3xl font-bold mb-4">
                Modern Family Residence
              </h3>

              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <FaMapMarkerAlt />
                <span>Gulshan, Dhaka</span>
              </div>

              {/* Property Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <FaBed className="mx-auto text-xl text-[#ff3333] mb-1" />
                  <p className="text-sm font-semibold">4 Beds</p>
                </div>
                <div className="text-center">
                  <FaBath className="mx-auto text-xl text-[#ff3333] mb-1" />
                  <p className="text-sm font-semibold">3 Baths</p>
                </div>
                <div className="text-center">
                  <FaRulerCombined className="mx-auto text-xl text-[#ff3333] mb-1" />
                  <p className="text-sm font-semibold">2,400 sqft</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#ff3333]">$350k</p>
                  <p className="text-xs text-gray-500">Starting</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 rounded-[10px] bg-red-500 px-6 h-15
                 text-white font-semibold btn hover:bg-[#ff3333] transition">
                  Schedule Visit
                </button>
                <button className="flex-1 rounded-[10px] border px-6 h-15 btn
                 font-semibold hover:bg-[#ff3333] transition">
                  View Details
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyFeatureSection;
