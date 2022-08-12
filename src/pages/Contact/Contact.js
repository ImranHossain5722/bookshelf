import React from "react";

const Contact = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6 justify-between">
        <div className="w-4/12">
          <div className="cart_summery">
            <div className="">
              <div className="mb-4">
                <p>Call or WhatsApp:</p>
                <h4 className="text-black text-[24px] font-semibold">
                  +31(0)77 472 3683
                </h4>
              </div>
              <div className="">
                <p>Get in touch:</p>
                <h4 className="text-black text-[24px] font-semibold">
                  info@bookShop.com
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <h3 className="text-black text-[24px] capitalize font-semibold pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
            Get in Touch
          </h3>
          <div className="flex gap-6 flex-col">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Reason for contact us"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name "
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="email"
                placeholder="Email"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex">
              <textarea
                className="textarea w-full border-[#e1e2e6] h-[120px] rounded-none focus:outline-none"
                placeholder="Message here"
              ></textarea>
            </div>
            <div className="w-full flex">
              <button className="btn btn-primary text-white w-full ">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


