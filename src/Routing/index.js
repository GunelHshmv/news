import {  Route, Routes } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
const Routing = () => {
    return <div>
        <Routes>
            <Route path='/news' exact element={<CategorialNews/>} />
            <Route path='/:title' element={<CategorialNews/>}/>

            <Route path='/:title/:index' element={<DetailedNews/>} />
        </Routes>
    </div>;
}

export default Routing;