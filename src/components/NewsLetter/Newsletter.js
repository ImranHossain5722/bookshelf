import React from 'react';
import newsBanner from '../../Assets/images/new.jpg';
const Newsletter = () => {
    return (
        <div>
             <div className=" flex items-center justify-center py-2">
      <div
        class=" w-3/4 "
        style={{
          backgroundImage: `url(${newsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",


        }}
      >
        <div class="hero-overlay bg-opacity-60 "></div>
        <div class="hero-content text-center text-neutral-content py-24">
          <div class="max-w-lg">
            <h1 class="mb-5 text-center text-2xl lg:text-4xl md:text-lg font-bold " style={{color:'#00124E'}}> Join Our Subscriptions </h1>
            <p class="mb-5">
            Join Our Subscriptions. Connected our offer related update. also we can update every user about to New books Collections.
            </p>
            <div className='grid grid-cols-2'>
                {/* <div class="form-control mx-4 mb-10">
                <input
                  type="text"
                  id='text'
                  placeholder="Enter your Name"
                  class="input input-bordered"
                />
              </div> */}
              <div class="form-control mx-4">
                <input
                  type="email"
                  id='email'
                  placeholder="Enter your Email"
                  class="input input-bordered"
                />
              </div>
          </div>
          <button type='submit' class="btn btn-primary text-white mt-3">Submit</button>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default Newsletter;