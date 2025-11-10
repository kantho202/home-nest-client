import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AddProperties = () => {
    const {user}=use(AuthContext)
    const handleAddProperties =(e)=>{
        e.preventDefault()
        const propertiesName =e.target.propertyName.value;
        const description =e.target.description.value;
        const price =e.target.price.value;
        const location =e.target.propertyName.value;
        console.log(propertiesName,description,price,location)

    }
    return (
        <div className="hero bg-base-200 min-h-screen p-20  mx-auto">
            <div className="hero-content flex-col lg:flex-row shrink-0 shadow-2xl  rounded-2xl">
                <div className="text-center w-full lg:text-left">

                    <img src="/src/assets/premium_photo-1676968002512-3eac82b1d847.avif" className='mx-auto rounded-2xl hidden lg:flex ' alt="" />
                </div>
                <div className="card bg-base-100 w-full  ">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center  font-bold">Add Properties!</h1>
                        <p className='text-primary font-medium text-center '>Add your property easily and reach real buyers. Start your journey with Home Nest today.</p>
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
                            <input type="text" name='name' className="input rounded-full w-full " placeholder={user?.displayName} />
                            {/* email */}
                            <label className="label">Email Address</label>
                            <div className='flex items-center relative '>
                                {/* <MdOutlineMailOutline size={22} className='text-gray-600 absolute top-1/2 left-3 -translate-y-1/2' /> */}
                                <input type="email"
                                    className="input rounded-full w-full " name='email '
                                    placeholder={user?.email} /> 
                            </div>


                            {/* password */}
                            <label className="label">Property Name</label>
                            <input type="text" name='propertyName' className="input rounded-full w-full" placeholder="Property Name" />
                            {/* password */}
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input rounded-full w-full" placeholder="Description" />
                            {/* password */}
                            <label className="label">Category</label>
                            <input type="dropdown" className="input rounded-full w-full" placeholder="" />
                            {/* password */}
                            <label className="label">Price </label>
                            <input type="text" name='price' className="input rounded-full w-full" placeholder="price" />
                            {/* password */}
                            <label className="label">Location </label>
                            <input type="text" name='location' className="input rounded-full w-full" placeholder="location" />


                            <button  className="btn btn-primary rounded-full mt-4">Add Property</button>

                        </fieldset>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperties;