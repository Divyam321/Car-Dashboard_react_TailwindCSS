import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';

const SideBar = forwardRef(({ showNav }, ref) => {
    const router = useLocation();
    return (
        <div ref={ref} className="fixed w-56 h-full bg-black shadow-lg border-r-2 border-gray-800">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src='https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8fDA%3D' className='w-20 h-auto rounded-full border-2 border-gray-800' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/"
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/account'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/account"
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                        <div className='mr-2'>
                            <UserIcon className='w-5 h-5' />
                        </div>
                        <p>Account</p>
                    </div>
                </Link>
                <Link to='/billing'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/billing"
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>Billing</p>
                    </div>
                </Link>
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';

export default SideBar;
