import React from 'react';
import { Route, Routes} from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
import { NewsProvider } from '../ContextData';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/news/:title/:index' element={<DetailedNews />} />
                <Route path='/news/:title' element={<NewsProvider><CategorialNews/></NewsProvider>} />
                <Route path='/news' exact element={<CategorialNews />} />
            </Routes>
        </div>
    );
}

export default Routing;
