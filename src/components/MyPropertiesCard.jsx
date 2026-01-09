import React, { use, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { FaUser } from 'react-icons/fa';
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const MyPropertiesCard = ({ myProperty, onDelete, onUpdate }) => {

    const { _id, user_name, property_price, property_name, location, email, image, category } = myProperty
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
        const name = e.target.name.value;
        const property_name = e.target.propertyName.value;
        const email = e.target.email.value;
        const category = e.target.category.value;
        const property_price = e.target.price.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        console.log(name, property_name, category, image, property_price, email, location, description)

        const updateProperties = { _id, name, property_name, email, category, property_price, location, description, image }
        fetch(`https://online-ticket-booking-server.vercel.app/myProperties/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProperties)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.insertedId){
                propertiesModalRef.current.close()
                // }
                console.log('after update', data)
                if (data.modifiedCount) {
                    onUpdate(updateProperties)
                    Swal.fire("Updated!", "Your property has been updated.", "success");
                    propertiesModalRef.current.close();
                }

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        // <div className="card bg-base-100 image-full  shadow-sm">
        //     <figure>
        //         <img
        //             src={image}
        //             alt="" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title font-bold">{property_name}</h2>
        //         <h2 className="font-semibold">{user_name}</h2>
        //         <p>{email}</p>
        //         <div className='flex justify-end'>
        //             <p className='font-semibold '>Price : {property_price}</p>
        //             <p className='font-semibold text-end'>Category : {category}</p>

        //         </div>
        //         <div className="card-actions flex items-center justify-end">
        //              <p className='font-semibold'>{location}</p>
        //             <Link to={`/myProperties/${_id}`} className="btn my-btn border-0">View Details</Link>
        //             <button onClick={handlePropertiesShowModal} className="btn my-btn border-0">Update</button>
        //             <button onClick={() => handlePropertiesRemove(myProperty._id)} className="btn my-btn border-0">Delete</button>



        //             <dialog ref={propertiesModalRef} className="modal modal-bottom sm:modal-middle">
        //                 <div className="modal-box lg:w-11/12 lg:max-w-5xl">



        //                     {/* <h3 className="font-bold text-lg">Hello!</h3>
        //                     <p className="py-4">Press ESC key or click the button below to close</p> */}
        //                     <div className='w-full '>
        //                         <div className=" mx-auto">
        //                             <div className="hero-content flex-col lg:flex-row shrink-0   rounded-2xl">

        //                                 <div className=" w-full  ">
        //                                     <div className="card-body ">
        //                                         <h1 className="text-2xl lg:text-3xl text-center light:text-red-500   font-bold">Update Properties!</h1>
        //                                         <p className=' font-medium text-center text-base py-3'>Add your property easily and reach real buyers. Start your journey with Home Nest today.</p>
        //                                         {/* update form */}
        //                                         <form onSubmit={handleUpdateProperties} >
        //                                             <fieldset className="fieldset">



        //                                                 {/* name */}



        //                                                 <div className='grid grid-cols-2 gap-7'>
        //                                                     <div className='  '>
        //                                                         <label className="label  text-[18px]">User Name</label>
        //                                                         <input type="text" name='name'
        //                                                             className="input rounded-full w-full  "
        //                                                             readOnly
        //                                                             defaultValue={user.displayName} />

        //                                                     </div>

        //                                                     <div className=''>

        //                                                         {/* properties name */}
        //                                                         <label className="label  text-[18px]">Property Name</label>
        //                                                         <input type="text" name='propertyName' required
        //                                                             defaultValue={property_name}
        //                                                             className="input rounded-full w-full"
        //                                                             placeholder="Property Name" />
        //                                                     </div>
        //                                                 </div>



        //                                                 {/* email */}
        //                                                 <label className="label  text-[18px]">Email Address</label>
        //                                                 <div className='flex items-center relative '>
        //                                                     <input type="email"
        //                                                         readOnly
        //                                                         defaultValue={user?.email}
        //                                                         className="input rounded-full w-full read-only " name='email'
        //                                                         placeholder={user?.email} />
        //                                                 </div>
        //                                                 {/* Image Link */}
        //                                                 <label className="label  text-[18px]">Image Link</label>

        //                                                     <input type="text" required 
        //                                                     // defaultValue={user?.photoUrl}
        //                                                         className="input rounded-full w-full read-only " name='image'
        //                                                         placeholder="Image URL" />







        //                                                 {/* 

        //                                                 <input type="dropdown" name='category'
        //                                                     className="input rounded-full w-full" placeholder="" /> */}
        //                                                 <div className='grid grid-cols-2 gap-7'>
        //                                                     {/* price */}
        //                                                     <div>
        //                                                         <label className="label  text-[18px]">Price </label>
        //                                                         <input type="number" name='price' required
        //                                                             defaultValue={property_price}
        //                                                             className="input rounded-full w-full" placeholder="price" />
        //                                                     </div>
        //                                                     {/* location*/}
        //                                                     <div>
        //                                                         <label className="label  text-[18px]">Location </label>
        //                                                         <input type="text" name='location' required
        //                                                             defaultValue={location}
        //                                                             className="input rounded-full w-full" placeholder="location" />
        //                                                     </div>
        //                                                 </div>

        //                                                 {/* categories */}
        //                                                 <label className="label  text-[18px]">Category</label>
        //                                                 <select defaultValue={category} name='category' required

        //                                                     className="input w-full rounded-full select">
        //                                                     <option disabled={true}>Category</option>
        //                                                     <option>Rent</option>
        //                                                     <option>Commercial</option>
        //                                                     <option>Sale</option>
        //                                                     <option>Land</option>
        //                                                 </select>
        //                                                 {/* description */}

        //                                                 <fieldset className="fieldset">
        //                                                     <legend className="fieldset-legend">Description</legend>
        //                                                     <textarea className="textarea h-40 w-full rounded-[5px]"
        //                                                         name='description' required
        //                                                         placeholder="Description"></textarea>

        //                                                 </fieldset>




        //                                                 <button className="btn my-btn rounded-full mt-4">Add Property</button>

        //                                             </fieldset>
        //                                         </form>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>
        //                         {/* add properties */}
        //                         {/* <div className='mx-20 py-5'>
        //                        <h1 className='text-3xl font-medium'>All Add Properties Details</h1>
        //                           </div> */}
        //                     </div>



        //                     <div className="modal-action">
        //                         <form method="dialog">
        //                             {/* if there is a button in form, it will close the modal */}
        //                             <button className="btn my-btn">Close</button>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </dialog>
        //         </div>
        //     </div>
        // </div>
        <div className="group relative rounded-[5px] overflow-hidden  shadow-xl border-1 border-[#dce0e0] p-3
         hover:shadow-2xl transition-all duration-500">


            <div className="relative h-60 overflow-hidden">
                <img
                    src={image}
                    alt={property_name}
                    className="w-full h-full rounded-t-[5px] object-cover group-hover:scale-110 transition-transform duration-500"
                />


                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />


                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
                    {category}
                </span>


                <span className="absolute bottom-4 right-4 bg-white text-red-500 font-bold px-4 py-2 rounded-xl shadow">
                    $ {property_price}
                </span>
            </div>


            <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold  line-clamp-1">
                    {property_name}
                </h2>

                <p className="text-sm text-gray-500 flex items-center space-x-2">
                    <FaUser className=''></FaUser> <span className=''>{user_name}</span>
                </p>

                <p className="text-sm text-gray-500 line-clamp-1 flex items-center space-x-2">
                    <span><FaLocationDot /> </span> <span>{location}</span>
                </p>

                <p className="text-xs text-gray-400 flex items-center space-x-2">
                    <MdEmail />   <span> {email}</span>
                </p>


                <div className="flex gap-3 pt-4">
                    <Link
                        to={`/myProperties/${_id}`}
                        className="flex-1 text-center py-2 
                        btn btn-outline   font-medium hover:opacity-90 transition"
                    >
                        View
                    </Link>

                    <button
                        onClick={handlePropertiesShowModal}
                        className="flex-1 py-2 
                        btn btn-outline  font-medium  transition"
                    >
                        Update
                    </button>

                    <button
                        onClick={() => handlePropertiesRemove(_id)}
                        className="flex-1 py-2  btn btn-outline 
                          font-medium 
                          "
                    >
                        Delete
                    </button>
                </div>
            </div>


            <dialog ref={propertiesModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box lg:w-11/12 lg:max-w-5xl">



                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                       <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className='w-full '>
                        <div className=" mx-auto">
                            <div className="hero-content flex-col lg:flex-row shrink-0   rounded-2xl">

                                <div className=" w-full  ">
                                    <div className="card-body ">
                                        <h1 className="text-2xl lg:text-3xl text-center light:text-red-500   font-bold">Update Properties!</h1>
                                        <p className=' font-medium text-center text-base py-3'>Add your property easily and reach real buyers. Start your journey with Home Nest today.</p>
                                        {/* update form */}
                                        <form onSubmit={handleUpdateProperties} >
                                            <fieldset className="fieldset">



                                                {/* name */}



                                                <div className='grid grid-cols-2 gap-7'>
                                                    <div className='  '>
                                                        <label className="label  text-[18px]">User Name</label>
                                                        <input type="text" name='name'
                                                            className="input rounded-full w-full  "
                                                            readOnly
                                                            defaultValue={user.displayName} />

                                                    </div>

                                                    <div className=''>

                                                        {/* properties name */}
                                                        <label className="label  text-[18px]">Property Name</label>
                                                        <input type="text" name='propertyName' required
                                                            defaultValue={property_name}
                                                            className="input rounded-full w-full"
                                                            placeholder="Property Name" />
                                                    </div>
                                                </div>



                                                {/* email */}
                                                <label className="label  text-[18px]">Email Address</label>
                                                <div className='flex items-center relative '>
                                                    <input type="email"
                                                        readOnly
                                                        defaultValue={user?.email}
                                                        className="input rounded-full w-full read-only " name='email'
                                                        placeholder={user?.email} />
                                                </div>
                                                {/* Image Link */}
                                                <label className="label  text-[18px]">Image Link</label>

                                                <input type="text" required
                                                    // defaultValue={user?.photoUrl}
                                                    className="input rounded-full w-full read-only " name='image'
                                                    placeholder="Image URL" />







                                                {/* 

                                                        <input type="dropdown" name='category'
                                                            className="input rounded-full w-full" placeholder="" /> */}
                                                <div className='grid grid-cols-2 gap-7'>
                                                    {/* price */}
                                                    <div>
                                                        <label className="label  text-[18px]">Price </label>
                                                        <input type="number" name='price' required
                                                            defaultValue={property_price}
                                                            className="input rounded-full w-full" placeholder="price" />
                                                    </div>
                                                    {/* location*/}
                                                    <div>
                                                        <label className="label  text-[18px]">Location </label>
                                                        <input type="text" name='location' required
                                                            defaultValue={location}
                                                            className="input rounded-full w-full" placeholder="location" />
                                                    </div>
                                                </div>

                                                {/* categories */}
                                                <label className="label  text-[18px]">Category</label>
                                                <select defaultValue={category} name='category' required

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
                                                        name='description' required
                                                        placeholder="Description"></textarea>

                                                </fieldset>




                                                <button className="btn my-btn rounded-full mt-4">Add Property</button>

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
                            <button className="btn my-btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default MyPropertiesCard;