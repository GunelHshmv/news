import {   Navigate, Route, Routes } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Routing = () => {
    
    useEffect(() => {
        if (window.location.pathname.includes('/news/')) {
            navigate('/all');
        }
    }, [navigate]);

    return null;
};
    return <div>
        <Routes>
            <Route path='/all' exact element={<CategorialNews />} />
            <Route path='/:title' element={<CategorialNews/>}/>
            <Route path='/:title/:index' element={<DetailedNews/>} />
            // <Route path='/news/' element={<Navigate to="/all" />} />
        </Routes>
    </div>;
}

export default Routing;
