import './Nredacao.css';

const Nredacao = function () {
    return (
        <>
        
        <div>
            <textarea placeholder='Escreva sua redação' className={styles.campo}></textarea>
        </div>
        <div className='butao'>
            <button type='submit'>Enviar</button>
        </div>
        </>
    );
};

export default Nredacao;