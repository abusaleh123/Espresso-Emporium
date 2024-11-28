import React from "react";
import banner from "../assets/more/3.png";
import logo1 from "../assets/icons/1.png";
import logo2 from "../assets/icons/2.png";
import logo3 from "../assets/icons/3.png";
import logo4 from "../assets/icons/4.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "bottom",
        }}
        className="flex flex-col justify-center items-end  text-right pb-72  py-52"
      >
        <div className="text-start  ">
          <h1 className="lg:text-6xl w-fit text-white mb-4 ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-[#FFFFFF]/70 mb-8 text-lg w-3/4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div className="w-fit">
            <button className="btn w-fit    text-2xl rounded-none btn-ghost bg-[#E3B577]">
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ECEAE3] flex justify-center items-center ">
        <div className="py-16 flex  justify-center   items-center  " >
       {/* Card 1 */}
       <div>
            <img  className="w-12 mb-4"  src={logo1} alt="" />
            <h1 className="text-3xl">Awesome Aroma</h1>
            <p className="font-[raleway] w-3/4 mt-2  text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            {/* Card 2 */}
       <div>
            <img className="w-12 mb-4"  src={logo2} alt="" />
            <h1 className="text-3xl">High Quality</h1>
            <p className="font-[raleway] w-3/4 mt-2  text-sm">We served the coffee to you maintaining the best quality</p>
            </div>
            {/* Card 3 */}
       <div>
            <img  className="w-12 mb-4" src={logo3} alt="" />
            <h1 className="text-3xl">Pure Grades</h1>
            <p className="font-[raleway] w-3/4 mt-2  text-sm">The coffee is made of the green coffee beans which you will love</p>
            </div>
            {/* Card 4 */}
       <div className="">
            <img className="w-12 mb-4"  src={logo4} alt="" />
            <h1 className="text-3xl">Proper Roasting</h1>
            <p className="font-[raleway] w-3/4 mt-2 text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Banner;
