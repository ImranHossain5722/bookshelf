import React from "react";
import newsBanner from "../../Assets/images/new.jpg";
const Newsletter = () => {
  return (
    <div>
      <div className=" flex items-center justify-center py-2">
        <div
          className=" w-3/4 "
          style={{
            backgroundImage: `url(${newsBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content py-24">
            <div className="max-w-lg">
              <h1
                className="mb-5 text-center text-2xl lg:text-4xl md:text-lg font-bold "
                style={{ color: "#00124E" }}
              >
                {" "}
                Join Our Subscriptions{" "}
              </h1>
              <p className="mb-5">
                Join Our Subscriptions. Connected our offer related update. also
                we can update every user about to New books Collections.
              </p>
              <div className="grid grid-cols-2">
                <div className="form-control mx-4 mb-10">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mx-4">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <button className="btn btn-primary text-white mt-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
