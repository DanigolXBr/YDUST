import { FunctionComponent } from "react";
import './Botao.css';

type Props = {
    texto: string;
    clique?: () => void;
    className?: string;
};

const Botao: FunctionComponent<Props> = function(props) {
    return (
        <>
        <button onClick={props.clique} className={`Botao ${props.className}`}>{props.texto}</button>
        </>

        
    );

};
export default Botao;