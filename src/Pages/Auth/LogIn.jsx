import React, { use,  } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { MdOutlineMailOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import Logo from '../../components/logo';

const LogIn = () => {
    const {  signUser,signInWithGoogle } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // const [error,setError]=useState("")
    const handleLogIn=(e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value;
        signUser(email,password)
        .then(result=>{
             const user = result.user;
                console.log(user)
                navigate(`${location.state ? location.state : "/"}`)
                
                    toast.success("Successfully login")
                
        })
        .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                //  console.log(errorCode)
                // setError(errorCode)
                toast.error(errorCode)
            });

    }
    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
                navigate(`${location.state ? location.state : "/"}`)
                toast.success('Successfully login')

            })
            .catch((error => {
                console.log(error)
               
            }))
    }
    return (
        <div className="lg:hero flex items-center justify-center  min-h-screen lg:p-20">
            
            <div className="hero-content flex-col lg:flex-row shrink-0 shadow-2xl rounded-2xl">
                <div className="text-center lg:text-left">

                    <img src="/src/assets/premium_photo-1676968002512-3eac82b1d847.avif" className='rounded-2xl hidden lg:flex ' alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm ">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center  font-bold">Log in Now!</h1>
                        <p className=''>Don't have an account? <Link to="/auth/register" className='text-[#ff3333] font-bold'>Register</Link> </p>

                        <form onSubmit={handleLogIn}>

                            <fieldset className="fieldset">


                                {/* email */}
                                <label className="label">Email Address</label>
                                <div className='flex items-center relative '>
                                    {/* <MdOutlineMailOutline size={22} className='text-gray-600 absolute top-5 left-3 ' /> */}

                                    <input type="email"
                                        className="input rounded-full w-full" name='email' required
                                        placeholder="Email Address" />
                                </div>

                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input rounded-full w-full" placeholder="Password" required />

                                <div><a className="link link-hover">Forgot password?</a></div>

                                {/* {
                                    error  && <p className='text-red-500'>{error}</p>
                                } */}

                                <button className="btn my-btn rounded-full mt-4">Login</button>
                                {/* Google */}
                                <button onClick={handleGoogleSingIn} className="btn bg-white rounded-full mt-4 text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;