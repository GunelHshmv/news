import { Route, Routes } from 'react-router-dom';
import CategorialNews from '../Pages/CategorialNews';
const Routing = () => {
    return <div>
        <Routes>
            <Route path='/news' element={<CategorialNews/>} />
            <Route path='/news/category/:title' element={<CategorialNews/>} />
        </Routes>
    </div>;
}

export default Routing;