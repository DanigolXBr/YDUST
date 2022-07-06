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
                <BotaoLink path="/cadastro">Cadastro</BotaoLink>
                
            </div>
        </>
    );
};

export default Cabecalho;