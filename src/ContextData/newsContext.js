import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const newsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://inshortsapi.vercel.app/news?category=all');
                setNews(response.data.data);
                console.log(title);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();

        window.history.replaceState(null, '', '/all');
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(title ? `https://inshortsapi.vercel.app/news?category=${title}` : 'https://inshortsapi.vercel.app/news?category=all');
                setNews(response.data.data);
                console.log(title);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();

    }, [title]);

    const contextValue = { news, setNews, setTitle };

    return <newsContext.Provider value={contextValue}>{children}</newsContext.Provider>;
};

export default newsContext;
