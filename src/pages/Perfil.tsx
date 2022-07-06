import './Perfil.css';
import Img01 from '../componentes/Imagens/foto perfil.png';
import Img02 from '../componentes/Imagens/Redacao.png';
import Botao from '../componentes/Botao';
import BotaoLink from '../componentes/BotaoLink';

const Perfil = function () {
    return (
        <>
        <BotaoLink path='/pagina-inicial' className='voltar'>Voltar</BotaoLink>

        <img src= {Img01} className = 'fperfil'/>
        
        <div className='cadastro'>
          <p>  Nome: Ana Julia Xavier</p>
            <br />
            Email: anajuliax2017@gmail.com
            <br />
            Senha: 12345678
            <br />
            CPF: 442.373.380-01
            <br />
            Nascimento: 08/05/2005

           

          </div>   

             <div  className = 'Redacao' >
             <p>Última Redação Feita:</p>
          <img src= {Img02} /> 
          </div>   
        </>
    );
};

export default Perfil;