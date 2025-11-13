import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { useLoaderData } from 'react-router';

const PropertiesDetails = () => {
    const properties = useLoaderData()
    console.log(properties)
    return (
        <div className='min-w-screen  bg-base-200 px-10 py-20'>

            <div className="flex w-full flex-col lg:flex-row">
                <div className=" grid  grow place-items">
                    <img className='' src={properties.property_image} alt="" />
                    <h1 className='font-bold text-2xl '>Properties Name : {properties.property_name}</h1>

                </div>
                <div className="divider lg:divider-horizontal"><LuArrowRight size={60} /></div>
                <div className=" grid   ">
                    <p className='pt-5 '><span className=' font-semibold text-[20px] '>Description </span> : <span className='font-medium text-[15px]'>{properties.description}</span> </p>
                    <p className=' pt-5'>
                        <span className='font-semibold text-[18px]'>Posted Name</span>  :<span className='font-medium text-[15px]'>{properties.posted_by.name}</span> </p>
                    <p className=' py-3'>
                        <span className='font-semibold text-[18px]'>Posted Email</span>  :<span className='font-medium text-[15px]'>{properties.posted_by.email}</span> </p>
                    <p className=' py-3'>
                        <span className='font-semibold text-[18px]'>Price</span>  :<span className='font-medium text-[15px]'>{properties.property_price} </span>  </p>
                    <p className=' py-3'>
                        <span className='font-semibold text-[18px]'>Category</span>  :<span className='font-medium text-[15px]'>{properties.category} </span>  </p>
                    <p className=' py-3'>
                        <span className='font-semibold text-[18px]'>Posted Date</span>  :<span className='font-medium text-[15px]'>{properties.posted_date} </span>  </p>

                </div>
            </div>
        </div>
    );
};

export default PropertiesDetails;