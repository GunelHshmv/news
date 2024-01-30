import { Outlet, Route, Routes } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
import DetailedNews from '../Pages/DetailedNews';
const Routing = () => {
    return <div>
        <Routes>
            <Route path='/news' element={<CategorialNews/>} />
            <Route path='/news/category/:title' element={<CategorialNews/>}></Route>
            <Route path='/news/category/:title/:index' element={<DetailedNews/>} />
        </Routes>
    </div>;
}

export default Routing;