import React from 'react'
import { useAuthStore } from '../lib/useAuthStore'
import { useState } from 'react'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignupPage = () => {

    const [ShowPass, setShowPass] = useState(false)
    const [Form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const { signup, isSignningUp } = useAuthStore();
    const validateForm = () => {
        if (!Form.fullName.trim()) return toast.error("Full name is required");
        if (!Form.email) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(Form.email)) return toast.error("Invalid Email Format");
        if (!Form.password) return toast.error("Password is required");

        if (Form.password.length < 6) return toast.error("Password must be at least 6 characters");

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();
        if (success === true) signup(Form);



    }


    // return (
    //     <div>Create your Account here!!!
    //         <div>
    //             <form action="" onSubmit={handleSubmit}>

    //                 <div>
    //                     <input value={Form.fullName} onChange={(e) => setForm({ ...Form, fullName: e.target.value })} type="text" placeholder="Write your first name" />
    //                     <input value={Form.email} onChange={(e) => setForm({ ...Form, email: e.target.value })} type="email" placeholder="write your email" />

    //                 </div>
    //                 <div>
    //                     <input type={ShowPass ? "text" : "password"} value={Form.password} onChange={(e) => setForm({ ...Form, password: e.target.value })} placeholder="type your password" />
    //                     <button onClick={() => setShowPass(!ShowPass)}>
    //                         {ShowPass ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
    //                     </button>
    //                 </div>
    //                 <button disabled={isSignningUp}>
    //                     {isSignningUp ? (<>
    //                         <Loader2 className="size-5 animate-spin" />
    //                         Loading....
    //                     </>) : ("Signup")}
    //                 </button>

    //             </form>
    //             <div>Already Have Account <Link to="/login" className="text-red-500">Sign In</Link></div>

    //         </div>

    //         <div>


    //         </div>
    //     </div>
    // )


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
          <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8">
            
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white">
                Create Your Account 🚀
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Join us and get started
              </p>
            </div>
      
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  value={Form.fullName}
                  onChange={(e) =>
                    setForm({ ...Form, fullName: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
      
              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  value={Form.email}
                  onChange={(e) =>
                    setForm({ ...Form, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
      
              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm text-gray-300">Password</label>
      
                <div className="relative">
                  <input
                    type={ShowPass ? "text" : "password"}
                    value={Form.password}
                    onChange={(e) =>
                      setForm({ ...Form, password: e.target.value })
                    }
                    placeholder="Create a password"
                    className="w-full px-4 py-2 pr-12 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
      
                  <button
                    type="button"
                    onClick={() => setShowPass(!ShowPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {ShowPass ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>
      
              {/* Submit Button */}
              <button
                disabled={isSignningUp}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition
                  ${
                    isSignningUp
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-amber-500 hover:bg-amber-600 text-black"
                  }
                `}
              >
                {isSignningUp ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
      
            {/* Footer */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?
              <Link
                to="/login"
                className="text-amber-400 ml-1 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      );
      

}

export default SignupPage