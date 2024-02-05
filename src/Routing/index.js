import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useLocation } from 'react-router-dom';

const Routing = () => {
    const location = useLocation();

    useEffect(() => {
        // Eğer /news rotası açıldığında /all rotasına yönlendirme yap
        if (location.pathname.includes('/news')) {
            return <Navigate to="/all" replace />;
        }
    }, [location]);

    return (
        <div>
            <Routes>
                <Route path='/all' element={<CategorialNews />} />
                <Route path='/:title' element={<CategorialNews />} />
                <Route path='/:title/:index' element={<DetailedNews />} />
            </Routes>
        </div>
    );
}

export default Routing;
