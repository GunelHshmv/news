import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useLocation } from 'react-router-dom';

const Routing = () => {
    const location = useLocation();

    useEffect(() => {
        // Sayfa yüklendiğinde veya yenilendiğinde bu etkileşim gerçekleşir
        // Eğer /news rotası açıldığında /all rotasına yönlendirme yap
        if (location.pathname.startsWith('/news')) {
            Navigate('/all');
        }
    }, [location]);

    return (
        <div>
            <Routes>
                {/* exact özelliği kullanarak yalnızca /news rotası tam olarak eşleştiğinde Navigate yapılacak */}
                <Route exact path='/news' element={<Navigate to="/all" replace />} />
                <Route path='/all' element={<CategorialNews />} />
                <Route path='/:title' element={<CategorialNews />} />
                <Route path='/:title/:index' element={<DetailedNews />} />
            </Routes>
        </div>
    );
}

export default Routing;
