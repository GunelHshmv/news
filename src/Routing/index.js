import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useLocation } from 'react-router-dom';

const Routing = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Eğer /news rotası açıldığında /all rotasına yönlendirme yap
        if (location.pathname.includes('/news/')) {
            navigate('/all');
        }
    }, [location, navigate]);

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
