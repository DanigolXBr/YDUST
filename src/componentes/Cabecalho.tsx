import Botao from './Botao';
import BotaoLink from './BotaoLink';
import './Cabecalho.css'

const Cabecalho = function () {
    return (
        <>
            <div className='cab'>
               <a href="/" className='cab0'>Ydust</a>
            </div>
            <div className='butao'>
                <BotaoLink path="/cadastro">Login</BotaoLink>
                
            </div>
        </>
    );
};

export default Cabecalho;