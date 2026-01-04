import React, { use } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const {createUser,signInWithGoogle}=use(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    const handleRegister =(e)=>{
        e.preventDefault()
        const form =e.target;
        // const firstName =form.firstName.value;
        // const lastName =form.lastName.value;
        // const photo  =form.photo.value;
        const email=form.email.value;
        const password  =form.password.value;


        const length6Pattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const specialCharacter = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

        if (!length6Pattern.test(password)) {
            console.log('password did not match')
            toast.error('Password must be 6 character longer')
            return;
        }

        if (!casePattern.test(password)) {
            toast.error('Password at least one upper case ')
            return;
        }

        if (!specialCharacter.test(password)) {
            toast.error('Password at least one special Character')
            return;
        }
        createUser(email,password)
        .then(result=>{
            console.log(result)
            navigate("/")
            toast.success('Create Successfully')
        })
        .catch(error=>{
            const errorMessage=error.message;
            toast.error(errorMessage)
        })

    }
    const handleGoogleSingIn =()=>{
        signInWithGoogle()
        .then((result)=>{

            const newUser ={
                name:result.user.displayName,
                email:result.user.email,
                image:result.user.photoURL,
                // categories:result.user.category
            }
            fetch('http://localhost:3000/addProperties',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                
            })
            console.log(result.user)
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="hero  min-h-screen p-20">
            <div className="hero-content flex-col lg:flex-row-reverse shrink-0 shadow-2xl rounded-2xl">
                <div className="text-center lg:text-left">

                    <img src="/src/assets/premium_photo-1676968002512-3eac82b1d847.avif" className='rounded-2xl hidden lg:flex ' alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm ">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center  font-bold">Create an Account!</h1>
                        <p className=''>Already have an account? <Link to="/auth/logIn" className='text-[#ff3333] font-bold'>Log in</Link> </p>

                        <form onSubmit={handleRegister}>

                            <fieldset className="fieldset">
                            {/* name */}
                            <div className='flex '>
                                <label className="label mr-31" >First Name</label>
                                <label className="label" >Last Name</label>
                            </div>

                            <div className='flex'>

                                <input type="text" className="input rounded-full w-full mr-3" name="firstName" placeholder="First Name" required />
                                <input type="text" className="input rounded-full w-full" name="lastName" placeholder="Last Name" required />
                            </div>
                            {/* email */}
                           

                            {/* <div className="relative w-[360px] ">
                               
                                <MdOutlineMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                                
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-50 rounded-full pl-10 pr-3 py-2  border-1 text-gray-700"
                                />
                            </div> */}
                            
                            <label className="label">Email Address</label>
                            <div className='flex items-center relative '>
                                {/* <MdOutlineMailOutline size={22} className='text-gray-600 absolute top-1/2 left-3 -translate-y-1/2' /> */}

                                <input type="email"
                                 className="input rounded-full w-full" name='email' required
                                  placeholder="Email Address" />
                            </div>
                            {/* photo */}
                            <label className="label">PhotoURL</label>
                            <input type="text" className="input rounded-full w-full" required
                            name='photo' placeholder="Photo URL" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" required name='password'
                             className="input rounded-full w-full" placeholder="Password" />

                            
                            <button className="btn my-btn rounded-full mt-4">Register</button>
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

export default Register;