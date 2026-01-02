import { create } from 'zustand';
import { axiosInstance } from './axios';
import toast from 'react-hot-toast';


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckAuth: true,

    checkAuth: async () => {

        try {
            const res = await axiosInstance.get('/auth/check')
            set({ authUser: res.data })
        } catch (error) {
            set({ authUser: null })

            console.log("Error in checkAuth", error);

        } finally {
            set({ isCheckAuth: false })
        }
    },

    signup: async (data) => {



        set({ isSigningUp: true })
        try {
            console.log(data);
            const res = await axiosInstance.post("/auth/signup", data)

            set({ authUser: res.data });
            toast.success("Account Created Successfully")

        } catch (error) {
            toast.error(error.response.data.message)

        } finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ authUser: null });
            toast.success("Logged out Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    login: async (data) => {

        set({ isLoggingIn: true })
        try {
            console.log(data);
            const res = await axiosInstance.post("/auth/login", data)

            set({ authUser: res.data });
            toast.success("Account Created Successfully")

        } catch (error) {
            toast.error(error.response.data.message)

        } finally {
            set({ isLoggingIn: false })
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put('/auth/update-profile', data)
            set({ authUser: res.data })
            toast.success("Profile Upadted Successfully")
        } catch (error) {
            console.log("Error in update profile", error);
            toast.error(error.response.data.message)

        } finally {
            set({ isUpdatingProfile: false })
        }

    }


})

)