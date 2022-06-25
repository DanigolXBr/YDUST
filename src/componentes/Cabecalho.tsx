import Botao from './Botao';
import './Cabecalho.css'

const Cabecalho = function () {
    return (
        <>
            <div className='cab'>
                Ydust 
            </div>
            <div className='butao'>
                <Botao texto={'Login'}></Botao>
                
            </div>
        </>
    );
};

export default Cabecalho;