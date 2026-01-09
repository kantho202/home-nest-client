import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
       <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-bold text- mb-4">404</h1>
      <p className="text-lg mb-6 text-gray-700"> 
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="btn btn-outline text-black  hover:text-white px-5 py-2 rounded hover:bg- transition"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default NotFound;