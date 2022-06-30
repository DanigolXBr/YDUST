import './Cadastro01.css';
import { useState } from 'react';
import Botao from '../componentes/Botao';
import Img01 from '../componentes/Imagens/ooooo.png'
import BotaoLink from '../componentes/BotaoLink';


enum Estado {
  inicial,
  
};



const Cadastro01 = function () {
  const [estado,setEstado] = useState (Estado.inicial);

      const botaoSalvarClicado = function () {
      };

  return (
    <>
      
        <div className='CadastroPage'>
          <img className='Logotipo' src={Img01} alt='ydust' />
          <div className='Formulario'>
            <input type="text" placeholder='Nome de usuário' className='campo'/>
            <input type="password" placeholder='Digite sua senha' className='campo'/>
            <input type="text" placeholder='Digite seu Email' className='campo' />
            <input type="text" placeholder='Digite seu CPF' className='campo' />

            <input type="text" placeholder='Digite sua Data de Nascimento' className='campo'/>
            <BotaoLink path="/perfil">Salvar</BotaoLink>
          </div>
        </div>

  
    </>
  );
};

export default Cadastro01;