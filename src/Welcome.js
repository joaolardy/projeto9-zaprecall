import logo from "./assets/img/logo.png"

export default function Welcome({jogoIniciado, setJogoIniciado}) {

    function iniciarJogo(){
        let estadoJogo = (!jogoIniciado);
        setJogoIniciado(estadoJogo);
    }

    return (
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <div onClick={iniciarJogo} className="botao-iniciar">
                <p>Iniciar Recall</p>
            </div>
        </div>
        
    )
}