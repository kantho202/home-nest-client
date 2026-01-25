import React from 'react';

const Loading = () => {
    return (
        <div className='px-4 lg:px-8 py-20 min-h-screen'>
            {/* Loading Spinner */}
            <div className='flex justify-center mb-8'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
            
            {/* Skeleton Cards Grid - Matches AllProperties responsive grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {/* Generate 8 skeleton cards to match itemsPerPage */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="group relative rounded-[5px] overflow-hidden shadow-xl border-1 border-[#dce0e0] p-3">
                        {/* Image Skeleton - matches h-60 from AllPropertiesCard */}
                        <div className="relative h-60 overflow-hidden mb-3">
                            <div className="skeleton w-full h-full rounded-t-[5px]"></div>
                            
                            {/* Category Badge Skeleton */}
                            <div className="absolute top-3 left-3">
                                <div className="skeleton h-6 w-16 rounded"></div>
                            </div>
                            
                            {/* Price Skeleton */}
                            <div className="absolute bottom-3 left-3">
                                <div className="skeleton h-6 w-20"></div>
                            </div>
                            
                            {/* Heart Icon Skeleton */}
                            <div className="absolute bottom-3 right-3">
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                            </div>
                        </div>

                        {/* Content Skeleton - matches p-5 padding */}
                        <div className="p-5 flex flex-col">
                            {/* Property Name Skeleton */}
                            <div className="skeleton h-6 w-3/4 mb-3"></div>
                            
                            {/* Location Skeleton */}
                            <div className="flex items-center mb-4">
                                <div className="skeleton h-4 w-4 mr-2 rounded"></div>
                                <div className="skeleton h-4 w-2/3"></div>
                            </div>

                            {/* Details Button Skeleton */}
                            <div className="flex justify-end">
                                <div className="skeleton h-8 w-16 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loading;