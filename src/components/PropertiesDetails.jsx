import React from 'react';
import { useLoaderData } from 'react-router';

const PropertiesDetails = () => {
    const properties =useLoaderData()
    console.log(properties)
    return (
        <div>
            this properties details
            <div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <div className="divider lg:divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>
        </div>
    );
};

export default PropertiesDetails;