import {   Route, Routes } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useEffect } from 'react';
const Routing = () => {
    useEffect(() => {
        const currentPath = window.location.pathname;

        if (currentPath === "/news/") {
            window.location.replace("/"); 
        }
    }, []);
    return <div>
        <Routes>
            <Route path='/' exact element={<CategorialNews />} />
            <Route path='/:title' element={<CategorialNews/>}/>
            <Route path='/:title/:index' element={<DetailedNews/>} />
        </Routes>
    </div>;
}

export default Routing;
