import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Navigate ekledik
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';

const Routing = () => {

    return (
        <div>
            <Routes>
            <Route exact path="/" element={<CategorialNews />} />
                <Route path='/all' element={<CategorialNews />} />
                <Route path='/:title' element={<CategorialNews/>} />
                <Route path='/:title/:index' element={<DetailedNews/>} />
            </Routes>
        </div>
    );
}

export default Routing;
