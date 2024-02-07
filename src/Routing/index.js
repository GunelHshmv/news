import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/news/:title/:index' element={<DetailedNews />} />
                <Route path='/news/:title' element={<CategorialNews />} />
                <Route path='/news' exact element={<CategorialNews />} />
            </Routes>
        </div>
    );
}

export default Routing;
