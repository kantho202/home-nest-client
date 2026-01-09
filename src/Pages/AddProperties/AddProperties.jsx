import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const AddProperties = () => {
    const { user } = use(AuthContext)
    const handleAddProperties = (e) => {
        e.preventDefault()
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const propertiesName = e.target.propertyName.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const image =e.target.image.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        console.log(propertiesName, description, price,image, location, userName, email)

        const newProperties = {
            user_name: userName,
            email: email,
            user_image: user?.photoURL,
            property_name: propertiesName,
            description: description,
            category: category,
            property_price: price,
            location: location,
            image:image,
        }

<<<<<<< HEAD
        fetch('https://online-ticket-booking-server.vercel.app/addProperties', {
=======
        fetch('http://localhost:3000/addProperties', {
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProperties)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Properties has been added to my properties",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div className='py-20'>
            <div className="hero  min-h-screen ">
                <div className="hero-content flex-col lg:flex-row shrink-0 shadow-2xl  rounded-2xl">
                    <div className="text-center w-full lg:text-left">

                        <img src="/src/assets/Black And Grey Real Estate Instagram Post.png"
                            className='mx-auto rounded-2xl hidden lg:flex opacity-100 ' alt="" />
                    </div>
                    <div className="card bg-base-100 w-full  ">
                        <div className="card-body">
                            <h1 className="text-2xl lg:text-3xl text-center  font-bold">Add Properties!</h1>
                            <p className=' font-medium text-center '>Add your property easily and reach real buyers. Start your journey with Home Nest today.</p>
                            <form onSubmit={handleAddProperties} >
                                <fieldset className="fieldset">

                                    {/* name
                            <div className='flex '>
                                <label className="label mr-31">First Name</label>
                                <label className="label">Last Name</label>
                            </div>

                            <div className='flex'>

                                <input type="text" className="input rounded-full w-full mr-3" name='name  ' placeholder="First Name" />
                                <input type="text" className="input rounded-full w-full" name='name ' placeholder="Last Name" />
                            </div> */}

                                    {/* name */}
                                    <label className="label">User Name</label>



                                    <input type="text" name='name'
                                        className="input rounded-full w-full  "
                                        readOnly
                                        defaultValue={user.displayName} />
                                    {/* email */}
                                    <label className="label">Email Address</label>
                                    <div className='flex items-center relative '>
                                        {/* <MdOutlineMailOutline size={22} className='text-gray-600 absolute top-1/2 left-3 -translate-y-1/2' /> */}
                                        <input type="email"
                                            readOnly
                                            defaultValue={user?.email}
                                            className="input rounded-full w-full read-only " name='email'
                                            placeholder={user?.email} />
                                    </div>


                                    {/* properties name */}
                                    <label className="label">Property Name</label>
                                    <input type="text" name='propertyName' required
                                        className="input rounded-full w-full" placeholder="Property Name" />
                                    {/* image */}
                                    <label className="label">Image Link</label>
                                    <input type="text" name='image' required
                                        className="input rounded-full w-full" placeholder="Image URL" />
                                    {/* description */}
                                    <label className="label">Description</label>
                                    <input type="text" name='description' required
                                        className="input rounded-full w-full" placeholder="Description" />
                                    {/* categories */}
                                    <label className="label">Category</label>
                                    <select defaultValue="Pick a color" name='category'
                                        className="input w-full rounded-full select">
                                        <option disabled={true}>Category</option>
                                        <option>Rent</option>
                                        <option>Commercial</option>
                                        <option>Sale</option>
                                        <option>Land</option>
                                    </select>
                                    {/* price */}
                                    <label className="label">Price </label>
                                    <input type="number" name='price' required
                                        className="input rounded-full w-full" placeholder="price" />
                                    {/* location*/}
                                    <label className="label">Location </label>
                                    <input type="text" name='location' required
                                        className="input rounded-full w-full" placeholder="location" />


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
    );
};

export default AddProperties;