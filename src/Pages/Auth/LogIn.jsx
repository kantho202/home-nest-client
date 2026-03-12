<<<<<<< HEAD
import { use } from 'react';
=======
import React, { use,  } from 'react';
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const LogIn = () => {
    const { signUser, signInWithGoogle } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogIn = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(`${location.state ? location.state : "/"}`)
                toast.success("Successfully logged in!")
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const handleGoogleSingIn = () => {
        setIsLoading(true)
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
                navigate(`${location.state ? location.state : "/"}`)
                toast.success('Successfully logged in!')
            })
            .catch((error => {
                console.log(error)
                toast.error('Google login failed')
            }))
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-7xl flex items-center justify-center">
                <div className="w-full max-w-md lg:max-w-6xl flex flex-col lg:flex-row bg-base-100 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Image Section - Enhanced for better responsiveness */}
                    <div className="hidden lg:flex lg:w-3/5 relative bg-gradient-to-br from-red-600 to-orange-700 p-12">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10 flex flex-col justify-center text-white">
                            <div className="mb-8">
                                <h2 className="text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                                    Welcome to <br />
                                    <span className="text-yellow-300">HomeNest</span>
                                </h2>
                                <p className="text-xl text-blue-100 leading-relaxed">
                                    Your trusted partner in finding the perfect home. 
                                    Discover thousands of properties tailored just for you.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="text-blue-100">Verified Properties</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="text-blue-100">Expert Support</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="text-blue-100">Secure Transactions</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full"></div>
                    </div>

                    {/* Form Section - Enhanced responsive design */}
                    <div className="w-full lg:w-2/5 p-6 sm:p-8 lg:p-12 xl:p-16">
                        <div className="max-w-sm mx-auto">
                            {/* Mobile Header */}
                            <div className="lg:hidden text-center mb-8">
                                {/* <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">H</span>
                                </div> */}
                                <h1 className="text-2xl font-bold ">Welcome Back!</h1>
                                <p className=" mt-2">Sign in to your HomeNest account</p>
                            </div>

                            {/* Desktop Header */}
                            <div className="hidden lg:block mb-8">
                                <h1 className="text-3xl xl:text-4xl font-bold  mb-2">Sign In</h1>
                                <p className="">Welcome back! Please sign in to your account.</p>
                            </div>

                            {/* Register Link */}
                            <div className="text-center mb-8">
                                <p className="text-sm ">
                                    Don't have an account? 
                                    <Link 
                                        to="/auth/register" 
                                        className="text-blue-600 hover:text-blue-700 font-semibold ml-1 transition-colors"
                                    >
                                        Create Account
                                    </Link>
                                </p>
                            </div>

                            <form onSubmit={handleLogIn} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-semibold  mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FiMail className="h-5 w-5 " />
                                        </div>
                                        <input 
                                            type="email"
                                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl
                                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                                              bg-gray-50 focus:bg-white" 
                                            name="email" 
                                            required
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-semibold  mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FiLock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input 
                                            type={showPassword ? "text" : "password"}
                                            name="password" 
                                            className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2
                                             focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50
                                              focus:bg-white" 
                                            placeholder="Enter your password"
                                            required 
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                            ) : (
                                                <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Forgot Password */}
                                <div className="text-right">
                                    <a className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer">
                                        Forgot password?
                                    </a>
                                </div>

                                {/* Login Button */}
                                <button 
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full 
                                        animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Sign In</span>
                                            <FiArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {/* Divider */}
                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                                    </div>
                                </div>

                                {/* Google Login Button */}
                                <button 
                                    onClick={handleGoogleSingIn} 
                                    type="button"
                                    disabled={isLoading}
                                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    <span>Continue with Google</span>
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="mt-8 text-center">
                                <p className="text-xs ">
                                    By signing in, you agree to our{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;