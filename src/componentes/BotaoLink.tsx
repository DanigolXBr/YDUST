import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import './Botao.css';

type Props = {
    children: ReactNode;
    path: string;
    className?: string;
    isFAB?: boolean;
};

const BotaoLink: FunctionComponent<Props> = function(props) {
    return (
        <>
            <Link to={props.path} className={`${props.isFAB ? 'BotaoFAB' : 'Botao'} ${props.className ?? ''}`}>{props.children}</Link>
        </>
    );
};

export default BotaoLink;   