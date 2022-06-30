import './App.css';
import Cadastro01 from './pages/Cadastro01';
import Cabecalho from './componentes/Cabecalho';
import { Route, Routes } from 'react-router-dom';
import Nredacao from './pages/Nredacao';
import Pgincial from './pages/Pgincial';
import Perfil from './pages/Perfil';

function App () {
  return (
    <>
        <Cabecalho/>
        <Routes>
          <Route path="/" element={<Pgincial />} />
          <Route path='/cadastro' element={<Cadastro01 />} />
          <Route path='/nova-redacao' element={<Nredacao />} />
          <Route path='/perfil' element= {<Perfil/>} />
        </Routes>
    </>
  );
};

export default App;