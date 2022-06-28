import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './Botao.css';

type Props = {
    texto: string;
    path: string;
    className?: string;
};

const BotaoLink: FunctionComponent<Props> = function(props) {
    return (
        <>
            <Link to={props.path} className={`Botao ${props.className}`}>{props.texto}</Link>
        </>
    );
};

export default BotaoLink;   