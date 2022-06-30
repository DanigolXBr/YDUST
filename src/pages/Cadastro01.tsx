import './Cadastro01.css';
import { useState } from 'react';
import Botao from '../componentes/Botao';
import Img01 from '../componentes/Imagens/ooooo.png'
import BotaoLink from '../componentes/BotaoLink';
import sup from '../componentes/Imagens/sup.png'
import Suporte01 from '../componentes/suporte01';




const Cadastro01 = function () {
  
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

        <Suporte01/>

       
    </>
  );
};

export default Cadastro01;