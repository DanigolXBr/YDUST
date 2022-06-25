import './Suporte.css'
import { FaInstagram } from 'react-icons/fa';


const Suporte = function (){
    return (
        <>
            <header className='flex'>
                <div className= 'suporte'>
                Bem-vindo ao suporte do Ydust
                </div>
            </header>
            <div className='flex'>
                <input type="text" placeholder='Como podemos ajudar?' className='campo' />
            </div>
            <div className='enviar'>
                <button type='submit'>Enviar</button>
                
            </div>
            <div className='instaflex'>
                <FaInstagram className='insta'/>
            </div>
        </>
    );
};

export default Suporte;