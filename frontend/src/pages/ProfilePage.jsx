import React, { useState } from 'react'
import { useAuthStore } from '../lib/useAuthStore'
import { Camera, CameraIcon, Mail, User, User2 } from 'lucide-react'
import user from '../assets/user.png'

const ProfilePage = () => {

    const { isUpdatingProfile, authUser, updateProfile } = useAuthStore()
    const [SelectedImg, setSelectedImg] = useState(null)

    const handleImageUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) return;

        const reader = new FileReader()

        reader.readAsDataURL(file)

        // console.log(authUser.profilePic);
        

        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImg(base64Image)
            console.log('dddd')
            await updateProfile({ profilepic: base64Image })
        }
    }
    return (
//         <div>

//             <div>
//                 <img className='size-20' src={SelectedImg || authUser.profilepic || user} />
//                 <label  htmlFor='img_icon' className={` rounded-full p-2 transition-all duration-200 ${isUpdatingProfile ? 'animate-pulse pointer-events-none' : ''} `}>
//                     <CameraIcon className='text-amber-500 bg-blue-500 w-15 h-15' />
//                     <input type="file" name="" className='hidden' id="avatar_upload" accept='image/*' onChange={handleImageUpload} disabled={isUpdatingProfile} />
//                 </label>
//                 <p className=''>
//                     {isUpdatingProfile ? 'Uploading.....' : 'Click on the camera icon to upload new profile pic'}
//                 </p>
//             </div>


// <div>
// <div>
// <User className='w-4 h-4'/>
// Full name

// </div>
// <p>{authUser?.fullName}</p>
// </div>

// <div>
//     <div>
//         <Mail className='w-4 h-4' />
//         Emsail Address
//     </div>
//     <p>{authUser?.email}</p>
// </div>

//         </div>


<div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 to-gray-800 px-4">
  <div className="max-w-3xl mx-auto">
    
    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8 space-y-10">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <p className="mt-1 text-gray-400 text-sm">
          Manage your personal information
        </p>
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative group">
          <img
            src={SelectedImg || authUser.profilepic || "/avatar.png"}
            alt="Profile"
            className="size-36 rounded-full object-cover border-4 border-amber-400 shadow-lg"
          />

          <label
            htmlFor="avatar-upload"
            className={`
              absolute bottom-1 right-1 
              bg-amber-500 text-black 
              p-2 rounded-full cursor-pointer
              shadow-md hover:scale-105 transition
              ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
            `}
          >
            <Camera className="w-5 h-5" />
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </label>
        </div>

        <p className="text-sm text-gray-400">
          {isUpdatingProfile
            ? "Uploading profile photo..."
            : "Click the camera icon to update your photo"}
        </p>
      </div>

      {/* Profile Info */}
      <div className="grid gap-6">
        
        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <User className="w-4 h-4 text-amber-400" />
            Full Name
          </div>
          <p className="px-4 py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700">
            {authUser?.fullName}
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" />
            Email Address
          </div>
          <p className="px-4 py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700">
            {authUser?.email}
          </p>
        </div>
      </div>

      {/* Account Info */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Account Information
        </h2>

        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-center justify-between py-2 border-b border-gray-700">
            <span>Member Since</span>
            <span>
              {authUser.createdAt?.split("T")[0]}
            </span>
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Account Status</span>
            <span className="text-green-400 font-medium">Active</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>





    )
}

export default ProfilePage