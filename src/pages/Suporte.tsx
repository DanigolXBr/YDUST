import './Suporte.css'
import { FaInstagram } from 'react-icons/fa';
import BotaoLink from '../componentes/BotaoLink';


const Suporte = function (){
    return (
        <>
            <header className='flex'>
                <div className= 'suporte'>
                Bem-vindo ao suporte do Ydust
                </div>
            </header>
            <div className='flex'>
                <input type="text" placeholder='Como podemos ajudar?' className='campo1' />
            </div>
            <div className='enviar'>
                <BotaoLink path=''>Enviar</BotaoLink>
                
            </div>
            <div className='instaflex'>
                <FaInstagram className='insta'/>
                <a href="https://www.instagram.com/_anajulia.x/" className='ana'> @_anajulia.x</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/yasmin_almeidd/" className='yas'> @yasmin_almeidd</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/danigolxbr/" className='dan'> @DanigolXBr</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/fragiacomoduda/" className='duda'> @fragiacomoduda</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/leticia_faccin/" className='le'> @leticia_faccin</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/rodrigohenriquexx/" className='ro'> @rodrigohenriquexx</a>
               <FaInstagram className='insta'/>
               <a href="https://www.instagram.com/_matheuuzs/" className='mathe'> @_matheuuzs</a>
            </div>
            
        </>
    );
};

export default Suporte;