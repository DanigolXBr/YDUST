import './pg01.css';
import Img02 from '../componentes/Imagens/redacao02.jpg'
import Img03 from '../componentes/Imagens/redacao03.jpg'
import Img04 from '../componentes/Imagens/redacao04.png'

import BotaoLink from '../componentes/BotaoLink';


const Pg01Page = function (){
    return (
        <>

         <div className='perfil'>
         <BotaoLink path="/perfil">Perfil</BotaoLink>
         </div>

         <div className='nova'>
             
         <BotaoLink path='/nova-redacao' className='nredacao01'>Nova Redação</BotaoLink>
         </div>


        <div className='redacao'>
         <img src= {Img02} className='r2'/>
         <img src= {Img03} className='r3'/>
         <img src= {Img04} className='r4'/>
        

        </div>
        
        
        
        </>
    );
};

export default Pg01Page;
