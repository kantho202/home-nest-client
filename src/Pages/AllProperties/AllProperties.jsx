<<<<<<< HEAD
import React, { use, useState, useEffect } from 'react';
=======
import React, { use, useState } from 'react';
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
import { useLoaderData } from 'react-router-dom';
import AllPropertiesCard from '../../components/AllPropertiesCard';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';
<<<<<<< HEAD
import { CiSearch } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight, FiFilter } from "react-icons/fi";
=======


<<<<<<< HEAD

=======
import { useQuery } from '@tanstack/react-query';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f

const AllProperties = () => {
    const data = useLoaderData()
    const { loading, setLoading } = use(AuthContext)
    const [properties, setProperties] = useState(data)
    const [sort, setSort] = useState('property_price')
    const [order, setOrder] = useState("asc")
<<<<<<< HEAD
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(8) // Show 8 properties per page
    const [totalPages, setTotalPages] = useState(Math.ceil(data.length / 8))
    
    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProperties = properties.slice(indexOfFirstItem, indexOfLastItem)
=======
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
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f

    // Update total pages when properties change
    useEffect(() => {
        setTotalPages(Math.ceil(properties.length / itemsPerPage))
        setCurrentPage(1) // Reset to first page when properties change
    }, [properties, itemsPerPage])

    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value;
        console.log(search_text)
        setLoading(true)
        fetch(`https://home-nest-cyan.vercel.app/search?search=${search_text}&sort=${sort}&order=${order}`)
            .then(res => res.json())
            .then(data => {
                console.log('search ', data)
                setProperties(data)
                setLoading(false)
            })
    }

    const handleSelect = (e) => {
        const [field, orderValue] = e.target.value.split("-");
        setSort(field);
        setOrder(orderValue);
        
        // Apply sorting immediately to current properties
        const sortedProperties = [...properties].sort((a, b) => {
            const aPrice = parseFloat(a.property_price) || 0;
            const bPrice = parseFloat(b.property_price) || 0;
            
            if (orderValue === 'asc') {
                return aPrice - bPrice;
            } else {
                return bPrice - aPrice;
            }
        });
        
        setProperties(sortedProperties);
    }

    // Function to sort properties locally
    const sortProperties = (propertiesToSort, sortField, sortOrder) => {
        return [...propertiesToSort].sort((a, b) => {
            const aPrice = parseFloat(a.property_price) || 0;
            const bPrice = parseFloat(b.property_price) || 0;
            
            if (sortOrder === 'asc') {
                return aPrice - bPrice;
            } else {
                return bPrice - aPrice;
            }
        });
    }

    // Pagination handlers
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1)
        }
    }

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pageNumbers = []
        const maxVisiblePages = 5
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i)
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pageNumbers.push(i)
                }
                pageNumbers.push('...')
                pageNumbers.push(totalPages)
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1)
                pageNumbers.push('...')
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pageNumbers.push(i)
                }
            } else {
                pageNumbers.push(1)
                pageNumbers.push('...')
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i)
                }
                pageNumbers.push('...')
                pageNumbers.push(totalPages)
            }
        }
        
        return pageNumbers
    }

    return (
        <div className='px-4 lg:px-8 py-20  min-h-screen'>
            {/* Header Section */}
            <div className=' rounded-2xl shadow-sm p-6 sm:p-8 mb-8'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl font-bold  mb-4'>All Properties</h1>
                    <p className=' max-w-2xl mx-auto'>
                        Discover your perfect home from our extensive collection of premium properties
                    </p>
                </div>

                {/* Controls Section */}
                <div className='flex flex-col lg:flex-row gap-4 justify-between items-center'>
                    {/* Results Count */}
                    <div className='flex items-center space-x-2'>
                        <span className=' font-medium'>Total Properties:</span>
                        <span className='bg-blue-100 text-[#ff3333] px-3 py-1 rounded-full font-semibold'>
                            {properties.length}
                        </span>
                        <span className=''>Found</span>
                    </div>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className='flex items-center'>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <CiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="search" 
                                name='search' 
                                className='pl-12 pr-4 py-3 border border-gray-300 rounded-l-2xl 
                                focus:ring-2 outline-0
                                 duration-200 w-64' 
                                placeholder="Search properties..." 
                            />
                        </div>
                        <button className="bg-[#ff3333]  text-white px-6 py-3 rounded-r-2xl transition-colors duration-200 font-medium">
                            Search
                        </button>
                    </form>

                    {/* Sort and Clear Controls */}
                    <div className='flex items-center space-x-3'>
                        <div className='flex items-center space-x-2'>
                            <FiFilter className="h-5 w-5 text-gray-500" />
                            <select 
                                onChange={handleSelect} 
                                className="px-4 py-3 border border-gray-300 rounded-2xl 
                                focus:ring-2 
                                  font-medium text-gray-700"
                                value={sort && order ? `${sort}-${order}` : ""}
                            >
                                <option value="">Sort by price</option>
                                <option value="property_price-asc">Price: Low to High</option>
                                <option value="property_price-desc">Price: High to Low</option>
                            </select>
                        </div>
                        
                        {/* Clear Filters Button */}
                        <button
                            onClick={() => {
                                setProperties(data);
                                setSort('property_price');
                                setOrder('asc');
                                setCurrentPage(1);
                                // Reset search form
                                document.querySelector('input[name="search"]').value = '';
                                document.querySelector('select').value = '';
                            }}
                            className="px-4 py-3 border border-gray-300 rounded-2xl
                             cursor-pointer text-gray-700 font-medium transition-colors duration-200"
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </div>

            {/* Properties Grid */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    {/* Properties Count and Pagination Info */}
                    <div className='flex justify-between items-center mb-6'>
                        <div className='text-gray-600'>
                            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, properties.length)} of {properties.length} properties
                        </div>
                        <div className='text-gray-600'>
                            Page {currentPage} of {totalPages}
                        </div>
                    </div>

                    {/* Properties Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
                        {currentProperties.map(property => (
                            <AllPropertiesCard key={property._id} property={property} />
                        ))}
                    </div>

                    {/* No Properties Found */}
                    {properties.length === 0 && (
                        <div className='text-center py-16'>
                            <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <CiSearch className="h-12 w-12 text-gray-400" />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Properties Found</h3>
                            <p className='text-gray-600'>Try adjusting your search criteria or filters</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className=' rounded-2xl shadow-sm p-6'>
                            <div className='flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
                                {/* Pagination Info */}
                                <div className='text-sm '>
                                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, properties.length)} of {properties.length} results
                                </div>

                                {/* Pagination Controls */}
                                <div className='flex items-center space-x-2'>
                                    {/* Previous Button */}
                                    <button
                                        onClick={handlePrevious}
                                        disabled={currentPage === 1}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                            currentPage === 1
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                        }`}
                                    >
                                        <FiChevronLeft className="h-4 w-4" />
                                        <span className="hidden sm:inline">Previous</span>
                                    </button>

                                    {/* Page Numbers */}
                                    <div className='flex items-center space-x-1'>
                                        {getPageNumbers().map((pageNumber, index) => (
                                            <button
                                                key={index}
                                                onClick={() => typeof pageNumber === 'number' && handlePageChange(pageNumber)}
                                                disabled={pageNumber === '...'}
                                                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                                                    pageNumber === currentPage
                                                        ? 'bg-[#ff3333] text-white shadow-lg'
                                                        : pageNumber === '...'
                                                        ? 'text-gray-400 cursor-default'
                                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                                }`}
                                            >
                                                {pageNumber}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                            currentPage === totalPages
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                        }`}
                                    >
                                        <span className="hidden sm:inline">Next</span>
                                        <FiChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllProperties;