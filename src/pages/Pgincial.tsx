import './Pgincial.css';
import Img01 from '../componentes/Imagens/ooooo.png';
import Img02 from '../componentes/Imagens/study-tools.png';
import i009 from '../componentes/Imagens/i009.jpg'
import Cabecalho from '../componentes/Cabecalho';
import Carrosel from '../componentes/carrosselinicial';


const Pgincial = function (){

    return (

        <>
            <img src={Img01} className='Img01'/>

            <div className='pesquisar'>
                <input type="text" placeholder='Pesquisar'/>
            </div>
        
                <div className='Introducao'>
                    <h1>Corrija sua redação em um instante</h1>

                    <p>Ydust é um programa onde os alunos cadastrados conseguem aprimorar sua redação e compartilhar <br />
                    conhecimentos, de forma rápida e gratuita.</p>
                </div>


                <div className='estudos'>
                    <img src={i009} alt="estudos" className='esu1'/>
                </div>
           
        </>
    );
};

export default Pgincial;