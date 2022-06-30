import './pg01.css';
import Img01 from '../componentes/Imagens/ooooo.png'
import BotaoLink from '../componentes/BotaoLink';


const Pg01Page = function (){
    return (
        <>

         <div className='perfil'>
         <BotaoLink path="/perfil">Perfil</BotaoLink>
         </div>

         <div className='nova'>
             
         <BotaoLink path='/novaredação'>Nova Redação</BotaoLink>
         </div>

        
        
        
        
        </>
    );
};

export default Pg01Page;
