import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsContext = createContext(); 
export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(title ? `https://inshortsapi.vercel.app/news?category=${title}` : 'https://inshortsapi.vercel.app/news?category=all');
                setNews(response.data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
            fetchData();
    }, [title]);
    const contextValue = { news, setNews };
    return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>; // newsContext yerine NewsContext kullanın
};

export default NewsContext;