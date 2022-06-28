import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import './Botao.css';

type Props = {
    children: ReactNode;
    path: string;
    className?: string;
};

const BotaoLink: FunctionComponent<Props> = function(props) {
    return (
        <>
            <Link to={props.path} className={`Botao ${props.className}`}>{props.children}</Link>
        </>
    );
};

export default BotaoLink;   