import './Perfil.css';
import Img01 from '../componentes/Imagens/foto perfil.png';
import Img02 from '../componentes/Imagens/Redacao.png';

const Perfil = function () {
    return (
        <>
        <p>oi</p>
        <img src= {Img01} className = 'fperfil'/>
        
        <div className='cadastro'>
            Nome: Carla da Silva
            <br />
            Senha: 3BK!****
            <br />
            Email: carladasilva@gmail.com 
            <br />
            CPF: ***.***.201-60
            <br />
            Nascimento: 26/08/1983

         

          </div>   

             <div  className = 'Redacao' >
          <img src= {Img02} /> 
          </div>   
        </>
    );
};

export default Perfil;