import React from 'react';

const MyRatings = () => {
    return (
          <div className="hero  mx-auto min-h-screen p-20">
            <div className="hero-content flex-col lg:flex-row shrink-0 w-2xl mx-auto shadow-2xl rounded-2xl">
               
                <div className="card bg-base-100 w-full  ">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center  font-bold">  Property Reviews</h1>
                      
                        <form >

                            <fieldset className="fieldset">


                                {/* name */}
                                <label className="label">Reviewer Name</label>
                                <div className='flex items-center relative '>

                                    <input type="text"
                                        className="input rounded-full w-full" name='name' required
                                        placeholder=" Reviewer name" />
                                </div>

                                {/* Property name */}
                                <label className="label">Property Name</label>
                                <input type="text" name='password' className="input rounded-full w-full" placeholder="Property name" required />
                                {/* Property name */}
                                <label className="label">Review Date</label>
                                <input type="text" name='password' className="input rounded-full w-full" placeholder="Property name" required />
                                {/*  */}
                                <label className="label">Short Review Text</label>
                                <textarea placeholder='text' className='h-15'  ></textarea>
                                

                               


                                <button className="btn my-btn rounded-full mt-4">Review now</button>
                               
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRatings;