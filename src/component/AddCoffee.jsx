import bg from '../assets/more/11.png';
import Swal from 'sweetalert2'

const AddCoffee = () => {

const handleAddCoffee = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const updatedData  = {name, chef, supplier, taste, category, details, photo, price}
    console.log(updatedData);

    fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body :JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }
    })


    
}

    return (
        <div style={{backgroundImage : `url(${bg})`, backgroundSize : 'cover' , backgroundRepeat: 'no-repeat'}} className='mt-0'> 
        <div className='  py-20 px-20 w-10/12 mx-auto '>
           <div className="text-center py-20 px-20 mt-20 bg-[#F4F3F0] rounded-xl">
           <div>
           <h1 className='text-5xl mb-4 font-bold text[#374151]'>Add New Coffee</h1>
           <p className=" font-[raleway] w-8/12 text-center mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
           </div>



           {/* Form */}

 
      <form onSubmit={handleAddCoffee} className="card-body">
       <div className='grid grid-cols-2 items-center gap-y-10 gap-x-6'>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter Coffee Name" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Chef</span>
          </label>
          <input type="text" name='chef' placeholder="Enter Coffee Chef" className="input " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Supplier</span>
          </label>
          <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Taste</span>
          </label>
          <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Category</span>
          </label>
          <input type="text" name='category' placeholder="Enter Coffee Category" className="input " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Details</span>
          </label>
          <input type="text" name='details' placeholder="Enter Coffee Details" className="input " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Price</span>
          </label>
          <input type="text" name='price' placeholder="Enter Coffee Price" className="input " required />
        
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-lg text-[#1B1A1ACC]/80">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="Enter Photo URL" className="input " required />
        
        </div>
        
       </div>
     
        <div className="form-control mt-6">
          <button className="btn btn-ghost text-xl bg-[#D2B48C] hover:bg-[#D2B48C]">Add Coffee</button>
        </div>
      </form>
  

           {/* Form */}
           </div>
        </div>
            
        </div>
    );
}; 

export default AddCoffee;