import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllPropertiesCard from '../../components/AllPropertiesCard';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';

const AllProperties = () => {
  const data = useLoaderData()
  // console.log(data)
  const { loading, setLoading } = use(AuthContext)
  const [properties, setProperties] = useState(data)
  const handleSearch = (e) => {
    e.preventDefault()
    const search_text = e.target.search.value;
    console.log(search_text)
    setLoading(true)
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then(res => res.json())
      .then(data => {
        console.log('search ', data)
        setProperties(data)
        setLoading(false)
      })
  }
  return (

    <div className='px-8'>
      <div className='text-center py-10'>


        <form onSubmit={handleSearch}>
          <label className="input join-item rounded-l-full border-2 outline-none">
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
          <button className="btn my-btn join-item rounded-r-full">Search</button>
        </form>


      </div>
      {
        loading ? <Loading></Loading> :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 py-20 '>
            {

              properties.map(property => <AllPropertiesCard key={property._id} property={property}></AllPropertiesCard>)
            }
          </div>
      }
    </div>
  );
};

export default AllProperties;