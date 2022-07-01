import BotaoLink from '../componentes/BotaoLink';
import styles from './Nredacao.module.css';

const Nredacao = function () {
    return (
        <div className={styles.Nredacao}>
            <div></div>

            <textarea placeholder='Escreva sua redação' className={styles.campo}></textarea>
            <BotaoLink path="/perfil">Enviar</BotaoLink>
        </div>
    );
};

export default Nredacao;