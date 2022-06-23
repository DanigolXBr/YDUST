import './App.css';
import Cadastro01 from './pages/Cadastro01';
import Pgincial from './pages/Pgincial';
import Cabecalho from './componentes/Cabecalho';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App (){
  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        <Routes>
          <Route path='/' element={<Pgincial />} />
          <Route path='/cadastro' element={<Cadastro01/>} />
        </Routes>
      </BrowserRouter>      
    </>
  );
};

export default App;