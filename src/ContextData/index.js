import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// const NewsContext = createContext(); // Bağlam adını NewsContext olarak değiştirin

// export const NewsProvider = ({ children }) => {
//     const [news, setNews] = useState([]);
//     const [title, setTitle] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(title ? `https://inshortsapi.vercel.app/news?category=${title}` : 'https://inshortsapi.vercel.app/news?category=all');
//                 setNews(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching news:', error);
//             }
//         };

//         fetchData();
//     }, [title]);

//     const contextValue = { news, setNews, setTitle };

//     return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>; // newsContext yerine NewsContext kullanın
// };

// export default NewsContext;
import { useParams } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';

const ContextData = () => {
    const [news, setNews] = useState([]);
    const {title}=useParams()
  
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
    return (
        <div>
            <CategorialNews news={news} />
            <DetailedNews news={news} />
        </div>
    );
}

export default ContextData;
