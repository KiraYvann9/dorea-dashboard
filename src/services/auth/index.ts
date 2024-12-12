import axios from 'axios'


const BASE_URL = process.env.NEXT_PUBLIC_API_URL

interface userLoginDataType {
    email: string
    password: string
}

interface userRegisterDataType extends userLoginDataType {
    phone_number: string
    address: string
    password: string
    password_confirmation: string
}

export const login = async (data: userLoginDataType) =>{
    try {
        const response = await axios.post(`${BASE_URL}/owner/login`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    } catch (error: unknown) {
        if(error instanceof Error){
            throw error
        }
    }
}

export const logout = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/logout`, {})
        return response.data
    }catch (error: unknown) {
        if(error instanceof Error){
            throw error
        }
    }
}


export const register = async (data: userRegisterDataType) =>{
    try {
        const response = await axios.post(`${BASE_URL}/owner/register`, data)
        return response.data
    }catch (error: unknown) {
        if(error instanceof Error){
            throw error
        }
    }
}