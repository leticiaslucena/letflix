import './/reset.css';
import './/global.css';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import PaginaPadrao from 'componentes/PaginaPadrao';

import NovoVideo from './componentes/NovoVideo';
import Home from 'componentes/Home';
import NovaCategoria from 'componentes/NovaCategoria';



function AppRouts() {
   
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>

          
            <Route index element={<Home/>}/>
            <Route path="novovideo" element={<NovoVideo/>} />
            <Route path='home' element={<Home />} />
            <Route path='novacategoria' element={<NovaCategoria />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default AppRouts;
