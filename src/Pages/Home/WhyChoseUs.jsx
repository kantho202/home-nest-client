import React from "react";
import { Home, ShieldCheck, Clock, Handshake } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Home className="w-10  " />,
            title: "Verified Properties",
            description:
                "All listings are 100% verified to ensure you get genuine and safe property options.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 " />,
            title: "Trusted Agents",
            description:
                "Work with professional, licensed real estate agents who care about your goals.",
        },
        {
            icon: <Clock className="w-10 h-10 " />,
            title: "Quick Process",
            description:
                "From booking to final deal — our smooth process saves your time and effort.",
        },
        {
            icon: <Handshake className="w-10 h-10 " />,
            title: "Transparent Deals",
            description:
                "No hidden charges or surprises — we believe in full honesty and clear communication.",
        },
    ];

    return (
        <section className="py-20 " id="why-choose-us">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Why Choose <span className="">HomeNest</span>?
                </h2>
                <p className=" max-w-2xl mx-auto mb-12">
                    Your trusted real estate partner for buying, selling, and investing —
                    with reliability and transparency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className=" rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 ">
                                {item.title}
                            </h3>
                            <p className=" text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
