import './App.css';
import Cadastro01 from './pages/Cadastro01';
import Cabecalho from './componentes/Cabecalho';
import Suporte01 from './componentes/suporte01';
import { Route, Routes } from 'react-router-dom';
import Nredacao from './pages/Nredacao';
import Pgincial from './pages/Pgincial';
import Perfil from './pages/Perfil';
import Suporte from './pages/Suporte';
import Pg01Page from './pages/pg01';

function App () {
  return (
    <>
        <Cabecalho/>
        <Routes>
          <Route path="/" element={<Pgincial />} />
          <Route path='/cadastro' element={<Cadastro01 />} />
          <Route path='/nova-redacao' element={<Nredacao/>} />
          <Route path= '/suporte' element= {<Suporte/>} />
          <Route path= '/perfil' element= {<Perfil/>} />
          <Route path= '/pagina-inicial' element= {<Pg01Page/>} />
          <Route path='/nova-redacao' element={<Nredacao />} />
          <Route path='/perfil' element= {<Perfil/>} />
          <Route path= '/suporte' element= {<Suporte/>} />
          <Route path= '/perfil' element= {<Perfil/>} />
          <Route path= '/teste' element= {<Pg01Page/>} />
        </Routes>
    </>
  );
};

export default App;