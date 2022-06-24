import './Nredacao.css';

const Nredacao = function () {
    return (
        <>
        
        <div>
            <input type="text" placeholder='Escreva sua redação' className='campo' />
        </div>
        <div className='butao'>
            <button type='submit'>Enviar</button>
        </div>
        </>
    );
};

export default Nredacao;