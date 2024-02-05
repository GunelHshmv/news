import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useLocation } from 'react-router-dom';

const Routing = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/news/') {
            navigate('/all');
        }
    }, [location]);

    return (
        <div>
            <Routes>
                <Route path='/all' element={<CategorialNews />} />
                <Route path='/:title' element={<CategorialNews />} />
                <Route path='/:title/:index' element={<DetailedNews />} />
                <Route path='/news/' element={<Navigate to="/all" />} />
            </Routes>
        </div>
    );
}

export default Routing;
