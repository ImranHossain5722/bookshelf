import React,{useState, useEffect,useRef} from "react";
import ReleaseBook from "../../Assets/images/Banner-images/ebook3-slider-pic1.png";
import authorImage from "../../Assets/images/Banner-images/author.jpg";
import Button from "../Button/Button";
import { BsCheckCircle } from "react-icons/bs";
const ProductReleaseLandingPage = () => {
  const [countDays, setCountDays] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countHour, setCountHour] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  let interval = useRef();
  const startCounting = () => {
    const releaseDate = new Date("September 20,2022 00:00:00 ").getTime();
    interval = setInterval(() => {
      const today = new Date().getTime();
      const duration = releaseDate - today;

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);

      if (duration < 0) {
        clearInterval(interval.current);
      } else {
        setCountDays(days);
        setCountHour(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startCounting();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  

  return (
    <div>
      <div className="card lg:card-side bg-white mx-auto max-w-[1240px] lg:mt-[20px] py-10 mb-[120px] ">
        <div className="card-body">
          <h2 className="card-title ml-28 text-4xl">
            <span className="text-black">New</span>
            <span className="text-accent">Book</span>
          </h2>
          <span className="text-accent ml-28 text-4xl font-semibold ">
            Comming Soon
          </span>
          <p className="pl-28 text-4xl lg:text-5xl mt-5 font-semibold text-primary uppercase">
            “The intelligent <span className="text-secondary">investor”</span>
          </p>
          <p className="pl-28 mt-[-20px] font-semibold text-secondary ">
            Buy a book that will help you grow
          </p>

          <div className="card-actions pl-28  ">
            <button
              disabled
              className="bg-gray-200 text-white py-4 px-4 rounded-lg "
            >
              Order Now{" "}
            </button>
          </div>
        </div>
        <figure>
          <img className="pr-28 w-full  h-96" src={ReleaseBook} alt="Album" />
        </figure>
      </div>

      <div className="card lg:card-side bg-white mx-auto max-w-[1240px] lg:mt-[20px] py-10 mb-[120px] ">
        <figure>
          <img className="px-10 w-full  h-96" src={ReleaseBook} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ml-28 text-xl lg:text-4xl capitalize">
            <span className="text-black ">Why you should </span>
            <span className="text-accent"> buy this book</span>
          </h2>
          <div className="pl-28">
            <div className="overflow-x-auto">
              <table className="table w-96 mt-4 ">
                <tbody className="bg-white">
                  {/* <!-- row 1 --> */}
                  <tr>
                    <th className="bg-white">
                      <BsCheckCircle className="text-primary bg-white"  />
                    </th>
                    <td className="bg-white">
                      Suspendisse pellentesque dui non felis
                    </td>
                   
                  </tr>
                  {/* <!-- row 2 --> */}
                  <tr>
                    <th className="bg-white">
                      <BsCheckCircle className="text-primary " />
                    </th>
                    <td className="bg-white">Aliquam erat ac ipsum</td>
                  </tr>
                  {/* <!-- row 3 --> */}
                  <tr>
                    <th className="bg-white">
                      <BsCheckCircle className="text-primary " />
                    </th>
                    <td className="bg-white">Vestibulum commodo volutpat convallis enim</td>
                  </tr>
                  <tr>
                    <th className="bg-white">
                      <BsCheckCircle className="text-primary " />
                    </th>
                    <td className="bg-white">Quisque lorem tortor</td>
                  </tr>
                  <tr>
                    <th className="bg-white">
                      <BsCheckCircle className="text-primary" />
                    </th>
                    <td className="bg-white">Cum sociis natoque penatibus et ultrices volutpat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* about author */}
      <div className="card lg:card-side bg-white mx-auto max-w-[1240px] lg:mt-[20px] py-10 mb-[120px] ">
        <div className="card-body">
          <h2 className="card-title ml-28 text-4xl">
            <span className="text-black">About </span>
            <span className="text-primary">Author</span>
          </h2>
          <p className="pl-28 text-4xl lg:text-5xl mt-5 font-semibold text-primary uppercase">
          My Name is  <span className="text-secondary">Henry Wick</span>
          </p>
          <p className="pl-28 mt-[-20px] font-semibold text-secondary ">
          Mauris rhoncus orci in imperdiet placerat. 
          Vestibulum euismod 
          nisl suscipit ligula volutpat, a feugiat urna maximus. 
          Cras massa nibh, tincidunt.
          </p>

          <div className="card-actions pl-28  ">
           
          </div>
        </div>
        <figure className="px-10">
          <img className=" w-full  h-96 rounded-xl" src={authorImage} alt="Album" />
        </figure>
      </div>

      {/* Table */}
      <div className="bg-white py-9">
        <p className=" text-center text-4xl font-semibold capitalize ">
          What you will find inside the book
        </p>
        <div className="flex justify-center mt-7">
          <ul class="steps steps-vertical ">
            <li class="step step-primary">Mauris aliquet vulputate</li>
            <li class="step step-primary">Curabitur</li>
            <li class="step step-primary"> Nulla facilisi</li>
            <li class="step step-primary"> Aliquam bibendum</li>
            <li class="step step-primary"> Vestibulum vestibulum</li>
            <li class="step step-primary"> Curabitur</li>
            <li class="step"> Mauris aliquet vulputate</li>
            <li class="step"> Nulla facilisi</li>
            <li class="step"> Quisque lobortis</li>
            <li class="step"> Nulla facilisi</li>
          </ul>
        </div>
      </div>

      {/**/}
      <div className="px-10 bg-white mx-auto max-w-[1240px] my-10 lg:mt-[120px] shadow-xl rounded-xl border-solid border-2 border-primary">
      <div className="card lg:card-side p-10">
        <figure>
          <img
            className="rounded w-full h-96"
            src={ReleaseBook}
            alt="Album"
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <div>
            <p className="  text-xl lg:text-[30px]  my-5 font-semibold text-accent">
              Publishing time is running out!{" "}
            </p>
            <div className="lg:flex lg:justify-around ">
              <div className="text-center mb-8">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl ">
                  {countDays}
                </p>
                <p className="text-accent font-semibold pt-4">Days</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">
                  {countHour}
                </p>
                <p className="text-accent font-semibold pt-4">Hours</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">
                  {countMinutes}
                </p>
                <p className="text-accent font-semibold pt-4 ">Minutes</p>
              </div>
              <div className="text-center ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl">
                  {countSeconds}
                </p>
                <p className="text-accent font-semibold pt-4">Seconds</p>
              </div>
            </div>
            <button
              disabled
              className="bg-gray-200 text-white py-4 px-4 rounded-lg "
            >
              Order Now{" "}
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
    </div>
  );
};

export default ProductReleaseLandingPage;
