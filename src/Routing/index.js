// import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Routing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedPath = localStorage.getItem('redirectPath');
        
        if (storedPath && window.location.pathname.includes('/news')) {
            navigate(storedPath);
        }
    }, [navigate]);

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
