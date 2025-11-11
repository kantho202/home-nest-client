import React, { use, useRef } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const MyPropertiesCard = ({ myProperty, onDelete }) => {
    const { _id, user_name, property_price, property_name, location, email, category } = myProperty
    const { user } = use(AuthContext)
    const propertiesModalRef = useRef(null)
    const handlePropertiesRemove = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(_id);
                Swal.fire("Deleted!", "Your property has been deleted.", "success");
            }
        });
    }

    const handlePropertiesShowModal = () => {
        propertiesModalRef.current.showModal()
    }
    const handleUpdateProperties = (e) => {
        e.preventDefault()
        const name =e.target.name.value;
        const property_name=e.target.propertyName.value;
        const email =e.target.email.value;
        const category =e.target.category.value;
        const price =e.target.price.value;
        const location =e.target.location.value;
        const description=e.target.description.value;
        // console.log(name,property_name,category,price,email,location,description)
        const updateProperties  ={name,property_name,email,category,price,location,description}
        fetch(`http://localhost:3000/myProperties/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateProperties)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after update',data)
            if(data.modifiedCount)
                alert('data modified')
        })

    }
    return (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{property_name}</h2>
                <h2 className="card-title">{user_name}</h2>
                <p>{email}</p>
                <div className='flex justify-between'>
                    <p>Category:{category}</p>
                    <p>{location}</p>
                    <p>Price:{property_price}</p>
                </div>
                <div className="card-actions flex items-center justify-end">

                    <Link to={`/properties-details/${_id}`} className="btn btn-primary">View Details</Link>
                    <button onClick={handlePropertiesShowModal} className="btn btn-primary">Update</button>
                    <button onClick={() => handlePropertiesRemove(myProperty._id)} className="btn btn-primary">Delete</button>



                    <dialog ref={propertiesModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box lg:w-11/12 lg:max-w-5xl">



                            {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p> */}
                            <div className='w-full text-primary'>
                                <div className=" bg-base-200 mx-auto">
                                    <div className="hero-content flex-col lg:flex-row shrink-0   rounded-2xl">

                                        <div className=" bg-base-100 w-full  ">
                                            <div className="card-body">
                                                <h1 className="text-2xl lg:text-3xl text-center text-primary  font-bold">Update Properties!</h1>
                                                <p className='text-primary font-medium text-center text-base py-3'>Add your property easily and reach real buyers. Start your journey with Home Nest today.</p>
                                                <form onSubmit={handleUpdateProperties} >
                                                    <fieldset className="fieldset">



                                                        {/* name */}



                                                        <div className='grid grid-cols-2 gap-7'>
                                                            <div className='  '>
                                                                <label className="label text-primary text-[18px]">User Name</label>
                                                                <input type="text" name='name'
                                                                    className="input rounded-full w-full  "
                                                                    readOnly
                                                                    defaultValue={user.displayName} />

                                                            </div>

                                                            <div className=''>

                                                                {/* properties name */}
                                                                <label className="label text-primary text-[18px]">Property Name</label>
                                                                <input type="text" name='propertyName' required
                                                                    className="input rounded-full w-full" placeholder="Property Name" />
                                                            </div>
                                                        </div>



                                                        {/* email */}
                                                        <label className="label text-primary text-[18px]">Email Address</label>
                                                        <div className='flex items-center relative '>
                                                            <input type="email"
                                                                readOnly
                                                                defaultValue={user?.email}
                                                                className="input rounded-full w-full read-only " name='email'
                                                                placeholder={user?.email} />
                                                        </div>






                                                        {/* 
                                                        
                                                        <input type="dropdown" name='category'
                                                            className="input rounded-full w-full" placeholder="" /> */}
                                                        <div className='grid grid-cols-2 gap-7'>
                                                            {/* price */}
                                                            <div>
                                                                <label className="label text-primary text-[18px]">Price </label>
                                                                <input type="text" name='price' required
                                                                    className="input rounded-full w-full" placeholder="price" />
                                                            </div>
                                                            {/* location*/}
                                                            <div>
                                                                <label className="label text-primary text-[18px]">Location </label>
                                                                <input type="text" name='location' required
                                                                    className="input rounded-full w-full" placeholder="location" />
                                                            </div>
                                                        </div>

                                                        {/* categories */}
                                                        <label className="label text-primary text-[18px]">Category</label>
                                                        <select defaultValue="Pick a color" name='category'
                                                            className="input w-full rounded-full select">
                                                            <option disabled={true}>Category</option>
                                                            <option>Rent</option>
                                                            <option>Commercial</option>
                                                            <option>Sale</option>
                                                            <option>Land</option>
                                                        </select>
                                                        {/* description */}

                                                        <fieldset className="fieldset">
                                                            <legend className="fieldset-legend">Description</legend>
                                                            <textarea className="textarea h-40 w-full rounded-[5px]" 
                                                            name='description'
                                                            placeholder="Description"></textarea>
                                                            
                                                        </fieldset>




                                                        <button className="btn btn-primary rounded-full mt-4">Add Property</button>

                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* add properties */}
                                {/* <div className='mx-20 py-5'>
                <h1 className='text-3xl font-medium'>All Add Properties Details</h1>
            </div> */}
                            </div>



                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MyPropertiesCard;