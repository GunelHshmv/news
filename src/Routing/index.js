import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Navigate ekledik
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
const Routing = () => {

    return (
        <div>
            <Routes>
                <Route path='/news' element={<CategorialNews />} />
                <Route path='/news/:title' element={<CategorialNews/>} />
                <Route path='/news/:title/:index' element={<DetailedNews/>} />
            </Routes>
        </div>
    );
}

export default Routing;
