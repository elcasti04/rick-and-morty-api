
import { useState } from "react"
import axios from "axios"

export const useApi = () => {
    const [data, setData] =useState(null)
    const fetchData = async (url) => {
        try{
            const res = await axios.get(url)
            setData(res.data)
        }catch(error){
            console.log(error.message || 'something went wrong')
        }

    }

    return [data, fetchData]
}