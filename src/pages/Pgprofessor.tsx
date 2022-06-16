import './Pgprofessor.css';

const Pgprofessores = function (){
    return (
        <>
            <div className='barra'>
                <button className='perfil'>Perfil</button>
                <button className='redacao '>Redações</button>
            </div>

            <div className='Tema'>
                <input type="text" placeholder='Tema' />
            </div>
        </>
        
    );
};

export default Pgprofessores;