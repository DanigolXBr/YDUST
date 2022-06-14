import { useState } from 'react';
import Img from '../componentes/Imagens/ooooo.png'
import Botao from '../componentes/Botao';
import './Cadastro01.css'
import Pg01Page from './pg01';

enum Estado {
  inicial,
  
};
  
const Cadastro01= function() {
      const [estado,setEstado] = useState (Estado.inicial);

      const botaoSalvarClicado = function () {
      
      };

        return (
        <div className='cadastro01'>
         <img src={Img} alt="Livro" />
          <div className='cadastro'>
            <input type="text" placeholder='Nome de usuário' className='campo'/>
            <br />
            <input type="password" placeholder='Digite sua senha' className='campo'/>
            <br />
            <input type="text" placeholder='Digite seu Email' className='campo' />
            <br />
            <input type="text" placeholder='Digite seu CPF' className='campo' />
            <br />
            <input type="text" placeholder='Digite sua Data de Nascimento' className='campo'/>
            <Botao texto='Salvar' clique={botaoSalvarClicado}/>
          </div>        
      </div>
    );
}

export default Cadastro01;
