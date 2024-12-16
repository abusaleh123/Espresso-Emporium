import { Link } from "react-router-dom";
import { BsCup } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import bg from '../assets/more/1.png';
import image1 from '../assets/Brand/1.png'
import image2 from '../assets/Brand/2.png'
import image3 from '../assets/Brand/3.png'
import image4 from '../assets/Brand/4.png'
import image5 from '../assets/Brand/5.png'
import image6 from '../assets/Brand/6.png'
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";



const AddCoffeeSec = ({coffees}) => {
    // console.log(coffees);
    const [loadedCoffees, setLoadedCoffees] =  useState(coffees)
    return (
        <div style={{backgroundImage: `url(${bg})`}}>
            <div className="flex flex-col items-center lg:mt-28 justify-center"> 
                <p className="font-[raleway]"> ---Sip & Savor--- </p>
                <h1 className="text-6xl text-[#331A15] font-bold">Our Popular Products</h1>
                <h1 className="mt-4">Total Added Coffee :  Last  {coffees.length}</h1>
                <Link to={'/addCoffee'} className="text-[#FFFFFF] text-xl mt-6 hover:bg-[#E3B577]  bg-[#E3B577] mb-10 btn border-2 flex items-center border-[#331A15]">Add Coffee <BsCup className="text-[#331A15]" /></Link>
            </div>


            <div className="grid w-10/12 mx-auto lg:grid-cols-2 grid-cols-1 gap-8">

                  {/* Card 1 */}
            <div className="bg-[#F5F4F1] bg-opacity-70 items-center flex justify-between rounded-lg gap-12 py-4 px-8">
              <div className="flex gap-6 items-center"> 
              <img src={image1} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Americano Coffee</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mr. Matin Paul</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 890 Taka</p>
                </div>
              </div>
                <div className="space-y-3">
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>


                  {/* Card 2 */}
                  <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
              <div className="flex gap-6 items-center"> 
              <img src={image2} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Cappuccino Coffee</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mr. Moruti</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 1050 Taka</p>
                </div>
              </div>
                <div className="space-y-3">
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>

            
                  {/* Card 3 */}
                  <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
              <div className="flex gap-6 items-center"> 
              <img src={image3} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Espresso Coffee</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mrs. Morisha</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 790 Taka</p>
                </div>
              </div>
                <div className="space-y-3">
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>

            
                  {/* Card 4 */}
                  <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
              <div className="flex gap-6 items-center"> 
              <img src={image4} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Black Coffee</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mr. Abu Saleh Noor</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 1150 Taka</p>
                </div>
              </div>
                <div className="space-y-3">
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>

            
                  {/* Card 5 */}
                  <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
              <div className="flex gap-6 items-center"> 
              <img src={image5} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Macchiato</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mr. Fahim</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 550 Taka</p>
                </div>
              </div>
                <div className="space-y-3"> 
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>

            
                  {/* Card 6 */}
                  <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
              <div className="flex gap-6 items-center"> 
              <img src={image6} alt="" />
                <div>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> Decaf Coffee</p>
                    <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> Mr. Imran</p>
                    <p className="font-[raleway]"><span className=" font-bold">Price:</span> 820 Taka</p>
                </div>
              </div>
                <div className="space-y-3">
                <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                <p className="p-3 bg-black rounded-lg"><FaPen className="text-white"  /></p>
                <p className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></p>
                
               
                </div>
            </div>

              {/* Update Card */}
{/* 
              {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} loadedCoffees= {loadedCoffees} setLoadedCoffees={setLoadedCoffees} coffee= {coffee}></CoffeeCard>)
                } */}
             

            








            
            </div>

          

        </div>
    );
};

export default AddCoffeeSec;