import React from "react";

const Contact = () => {
  return (
    <div className="section_padding ">
      <div className="container m-auto ">
        <div className="block lg:grid grid-cols-2 gap-4 max-w-5xl m-auto">
          <div className="col-span-1 mt-0 md:mt-12 mb-4">
            <div className="cart_summery max-w-sm">
              <h4 className="text-black text-[24px] font-semibold mb-2">
                Contact Information
              </h4>
              <p className="mb-5">
                Duis aute irure dolor reprehenderit voluptate velit esse
                cilludolore eu fugiatnulla xcepteur sint aecat cupidatat nones
                proident, sunt in culpa qui officiat mollit anim idestborum.
              </p>
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
          <div className="col-span-1 bg-white p-6 shadow-2xl rounded-lg">
            <h3 className="text-secondary text-[40px] capitalize font-semibold pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
              Get in Touch
            </h3>
            <div className="flex gap-6 flex-col">
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Reason for contact us"
                  className="input w-full border-[#e1e2e6] bg-white h-[50px] rounded-none focus:outline-none"
                />
              </div>
              <div className="w-full flex grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input w-full border-[#e1e2e6] bg-white h-[50px] rounded-none focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name "
                  className="input w-full border-[#e1e2e6] bg-white h-[50px] rounded-none focus:outline-none"
                />
              </div>
              <div className="w-full flex ">
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full border-[#e1e2e6] bg-white h-[50px] rounded-none focus:outline-none"
                />
              </div>
              <div className="w-full flex">
                <textarea
                  className="textarea w-full border-[#e1e2e6] bg-white  h-[120px] rounded-none focus:outline-none"
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
    </div>
  );
};

export default Contact;
