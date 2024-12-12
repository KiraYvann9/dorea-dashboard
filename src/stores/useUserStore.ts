import {create} from 'zustand'
import {persist} from "zustand/middleware";

import {login, logout} from "@/services/auth";

type userType = {
    user: any,
    login: (data: any) => any,
    logout: () => void
}

export const useUserStore = create<userType>()(persist((set)=>({
    user: {},
    login: async (data: any) => {
        const response = await login(data)
        set({user: response.data})
    },
    logout: async () => {
        await logout()
        set({user: null})
    },
}), {name: 'currentUser'}))