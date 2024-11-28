import { Link } from "react-router-dom";
import { BsCup } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, loadedCoffees, setLoadedCoffees}) => {
    const updated = {name, } = coffee;
    // console.log(coffee.chef);

    const handleDelete = _id => {
        console.log(coffee._id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            // if (result.isConfirmed) {
            // //   Swal.fire({
            // //     title: "Deleted!",
            // //     text: "Your file has been deleted.",
            // //     icon: "success"
            // //   });

            // // console.log('delete confirm');
            // }
          });

fetch(`http://localhost:5000/coffee/${coffee._id}`, {
    method: "DELETE"
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.deletedCount > 0){
           Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              const remaining = loadedCoffees.filter(cof => cof._id !== _id )
              setLoadedCoffees(remaining)

    }
})

    }
    return (
        <div>
             <div className="bg-[#F5F4F1] bg-opacity-70  items-center flex justify-between rounded-lg gap-12 py-4 px-5">
               
               <div className="flex gap-6 items-center"> 
               <img src={coffee.photo} alt="" />
                 <div>
                     <p className="font-[raleway] mb-2"><span className=" font-bold">Name:</span> {name}</p>
                     <p className="font-[raleway] mb-2"><span className=" font-bold">Chef:</span> {coffee.chef}</p>
                     <p className="font-[raleway]"><span className=" font-bold">Price:</span> {coffee.price}Taka</p>
                 </div>
               </div>
                 <div className="space-y-3">
                 <p className="p-3 bg-[#D2B48C] rounded-lg"><FaEye className=" text-white " /></p>
                 <p className="flex p-3 bg-black rounded-lg">
                    
                 <Link to={`/updateCoffee/${coffee._id}`} className=""><FaPen className="text-white"  /></Link>
                 </p>
                 <button onClick={() => handleDelete(coffee._id)} className="p-3 bg-[#EA4744] rounded-lg"> <MdDelete className="text-white text-lg" /></button>
                 
                
                 </div>
             </div>
        </div>
    );
};

export default CoffeeCard;