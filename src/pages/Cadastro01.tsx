import './Cadastro01.css';
import { useState } from 'react';
import Botao from '../componentes/Botao';
import Img01 from '../componentes/Imagens/ooooo.png'
import BotaoLink from '../componentes/BotaoLink';
import sup from '../componentes/Imagens/sup.png'




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
            <BotaoLink path='/pagina-inicial'>Salvar</BotaoLink>
           
          </div >
          
        </div>
        <div className='ajudinha'>
          <a href='/suporte'><img src={sup} alt="" className='suporte01'/></a>
          </div>
    </>
  );
};

export default Cadastro01;