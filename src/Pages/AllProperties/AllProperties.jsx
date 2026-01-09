import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPropertiesCard from '../../components/AllPropertiesCard';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';


<<<<<<< HEAD

=======
import { useQuery } from '@tanstack/react-query';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c

const AllProperties = () => {
 
  const data = useLoaderData()
  
  // console.log(data)
  const { loading, setLoading } = use(AuthContext)
  const [properties, setProperties] = useState(data)
   const [sort, setSort] = useState('property_price')
    const [order, setOrder] = useState("asc")
  const handleSearch = (e) => {
    e.preventDefault()
    const search_text = e.target.search.value;
    console.log(search_text)
    setLoading(true)
<<<<<<< HEAD
    fetch(`https://online-ticket-booking-server.vercel.app/search?search=${search_text}&sort=${sort}&order=${order}`)
=======
    fetch(`http://localhost:3000/search?search=${search_text}&sort=${sort}&order=${order}`)
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
      .then(res => res.json())
      .then(data => {
        console.log('search ', data)
        setProperties(data)
        setLoading(false)
      })
  }
 
<<<<<<< HEAD

=======
// const {data: [propertiesHome]}=useQuery({
//   queryKey:[properties],
//   queryFn:async()=>{
//     const result =axiosSecure.get('/search')
//     return result.data;
//   }
// })
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
  // const handleSelect = (e) => {
  //   const sortText = e.target.value;
  //   setSort(sortText.split("-")[0])
  //   setOrder(sortText.split("-")[1])
  // }
  const handleSelect = (e) => {
    // console.log('c')
  const [field, order] = e.target.value.split("-");
  setSort(field);
  setOrder(order);
};
  return (

    <div className='px-8 py-20'>
      <div className='text-center pt-10'>

        <h1 className='text-4xl pb-5'>All Properties</h1>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold'> Total Properties<span className='text-red-600'>{properties.length}</span> Found </h2>
          <form onSubmit={handleSearch}>
            <label className="input join-item rounded-l-full border-2 outline-none w-xl h-12">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" name='search' className='' placeholder="Search" />
            </label>
            <button className="btn my-btn join-item rounded-r-full h-12">Search</button>
          </form>

          <form className='flex justify-end '>
            <select 
              onChange={handleSelect} className="select outline-0 border-0 font-semibold
                         focus-within:border- focus-within:ring-1 focus-within:ring- " required>
              <option disabled selected value="">Sort by price:</option>
              <option value={"property_price-asc"}>Low to High</option>
              <option value={"property_price-desc"}>High to Low</option>
            </select>

          </form>
        </div>


      </div>
      {
        loading ? <Loading></Loading> :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10 items-stretch'>
            {

              properties.map(property => <AllPropertiesCard key={property._id} property={property}></AllPropertiesCard>)
            }
          </div>
      }
    </div>
  );
};

export default AllProperties;