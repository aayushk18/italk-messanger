import { LogOut, MessageCircleIcon, Settings, User } from 'lucide-react'
import React from 'react'
import { useAuthStore } from '../lib/useAuthStore'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {

    const { logout, authUser } = useAuthStore();


    // return (
    //     <div className='flex mx-auto w-full'>

    //         <div className='flex justify-between w-full items-center' >
    //             <div className='flex items-center justify-center'>
    //                 <MessageCircleIcon />
    //                 <span className='hidden sm:inline'>ChatApp</span>

    //             </div>
    //             <div className='flex items-center justify-center gap-3'>
    //                 <Link to='/settings'>
    //                     <Settings />
    //                     <span className='hidden sm:inline'>Settings</span>
    //                 </Link>
    //                 {authUser && (
    //                     <>
    //                         <Link to='/profile'>
    //                             <User />
    //                             <span className='hidden sm:inline'>{authUser.fullName}</span>
    //                         </Link>
    //                         <button onClick={logout} >
    //                             <LogOut />
    //                             <span className='hidden sm:inline'>Logout</span>
    //                         </button>
    //                     </>
    //                 )}

    //             </div>
    //         </div>
    //     </div>
    // )


    return (
        <nav className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            
            <div className="flex h-16 items-center justify-between">
              
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-2 text-white font-semibold text-lg"
              >
                <MessageCircleIcon className="text-amber-400" />
                <span className="hidden sm:inline">ChatApp</span>
              </Link>
      
              {/* Right Section */}
              <div className="flex items-center gap-4">
                
                {/* Settings */}
                {/* <Link
                  to="/settings"
                  className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition"
                >
                  <Settings size={20} />
                  <span className="hidden sm:inline text-sm">Settings</span>
                </Link> */}
      
                {authUser && (
                  <>
                    {/* Profile */}
                    <Link
                      to="/profile"
                      className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition"
                    >
                      <User size={20} />
                      <span className="hidden sm:inline text-sm">
                        {authUser.fullName}
                      </span>
                    </Link>
      
                    {/* Logout */}
                    <button
                      onClick={logout}
                      className="flex items-center gap-1 text-gray-300 hover:text-red-400 transition"
                    >
                      <LogOut size={20} />
                      <span className="hidden sm:inline text-sm">Logout</span>
                    </button>
                  </>
                )
                }
              </div>
            </div>
          </div>
        </nav>
      );
      

}

export default Navbar