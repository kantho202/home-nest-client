import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const DashboardProfile = () => {
    const { user } = use(AuthContext);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className=" rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold  mb-2">Profile Settings</h1>
                <p className="text-gray-600">Manage your account information and preferences.</p>
            </div>

            {/* Profile Card */}
            <div className=" rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className=" text-2xl font-bold">
                            <img src={user.photoURL} className='rounded-full' alt="" />
                            {/* {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'} */}
                        </span>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-bold ">
                            {user?.displayName || 'User Name'}
                        </h2>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium  mb-2">
                            <FiUser className="inline w-4 h-4 mr-2" />
                            Display Name
                        </label>
                        <input
                            type="text"
                            value={user?.displayName || ''}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg "
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FiMail className="inline w-4 h-4 mr-2" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={user?.email || ''}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg "
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FiPhone className="inline w-4 h-4 mr-2" />
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="Add your phone number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FiMapPin className="inline w-4 h-4 mr-2" />
                            Address
                        </label>
                        <input
                            type="text"
                            placeholder="Add your address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button className=" btn bg-[#ff3333] text-white px-6 py-2 rounded-lg  transition-colors">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;