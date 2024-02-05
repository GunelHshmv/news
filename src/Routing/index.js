// import React, { useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom'; // Navigate ekledik
// import CategorialNews from '../Pages/CategorialNews';
// import DetailedNews from '../Pages/DetailedNews';
// import { useNavigate } from 'react-router-dom';

// const Routing = () => {
//     const navigate = useNavigate(); // useNavigate hook'unu burada kullanın

//     // useEffect(() => {
//     //     if (window.location.pathname.includes('/news')) {
//     //         navigate('/all');
//     //     }
//     // }, [navigate]);

//     return (
//         <div>
//             <Routes>
//                 <Route path='/all' element={<CategorialNews />} />
//                 <Route path='/:title' element={<CategorialNews/>} />
//                 <Route path='/:title/:index' element={<DetailedNews/>} />
//                 <Route path='/news/' element={<Navigate to="/all" />} />
//             </Routes>
//         </div>
//     );
// }

// export default Routing;


import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { useNavigate } from 'react-router-dom';

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
                {/* Ana sayfaya giden yol */}
                <Route path='/' element={<CategorialNews />} />
                {/* Tüm haberler için yol */}
                <Route path='/all' element={<CategorialNews />} />
                {/* Detaylı haberler için yol */}
                <Route path='/:title/:index' element={<DetailedNews />} />
                {/* Haberler için genel yol, burada Navigate yerine Redirect kullanılabilir */}
                <Route path='/news/*' element={<Navigate to="/all" />} />
            </Routes>
        </div>
    );
}

export default Routing;
