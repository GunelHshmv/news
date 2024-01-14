import { createContext, useState,useEffect } from "react";
import axios from 'axios'
const newsContext=createContext()

export const NewsProvider = ({children}) => {
    const [news,setNews]=useState([])
    const values={news,setNews}
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setNews(res.data)
        })
    }, [])
    return <newsContext.Provider value={values} >{children}</newsContext.Provider>;
}
export default newsContext