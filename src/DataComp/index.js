import React, { createContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import PageContainer from '../PageContainer';
import axios from 'axios';

const DataComp = () => {
    const [news, setNews] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(title ? `https://inshortsapi.vercel.app/news?category=${title}` : 'https://inshortsapi.vercel.app/news?category=all');
                setNews(response.data.data);
              console.log(news)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, [title]);
    console.log(news)

    return (
        <div>
            <CategorialNews news={news} />
            <DetailedNews news={news} />
        </div>
    );
}
export default DataComp;