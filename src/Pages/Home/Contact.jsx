import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
     
        <div>
          <h2 className="text-3xl md:text-4xl font-bold   mb-4">
            Get in Touch with <span className="">HomeNest</span>
          </h2>
          <p className=" mb-6 leading-relaxed">
            Have a question or want to schedule a property visit? We are here to help you find your dream home with ease and trust.  
            Reach out to us anytime — we  love to hear from you!
          </p>

          <div className="space-y-3  ">
            <p className="flex items-center gap-3">
              <MapPin className="" />  
              Banani, Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-3">
              <Phone className="" />  
              +880 1234-567890
            </p>
            <p className="flex items-center gap-3">
              <Mail className="" />  
              contact@homenest.com
            </p>
          </div>
        </div>

        
        <div className="">
          <h3 className="text-2xl font-semibold  mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium   mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full outline-0 "
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full outline-0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full h-28 outline-0"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn  font-medium py-2 rounded-[10px] h-11 shadow-md my-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
