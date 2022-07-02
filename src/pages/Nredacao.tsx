import BotaoLink from '../componentes/BotaoLink';
import styles from './Nredacao.module.css';

const Nredacao = function () {
    return (
        <div className={styles.Nredacao}>
            <div className={styles.top}>
                Tema: <input type="text" placeholder='Escreva seu Tema' className='campo'/>
            </div>
            
            <textarea placeholder='Escreva sua redação' className={styles.campo}></textarea>
            <BotaoLink path="/perfil">Enviar</BotaoLink>
        </div>
    );
};

export default Nredacao;