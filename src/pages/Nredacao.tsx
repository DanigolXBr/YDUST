import styles from './Nredacao.module.css';

const Nredacao = function () {
    return (
        <>
        
        <div>
            <textarea placeholder='Escreva sua redação' className={styles.campo}></textarea>
        </div>
        <div className={styles.butao}>
            <button type='submit'>Enviar</button>
        </div>
        </>
    );
};

export default Nredacao;