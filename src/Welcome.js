import logo from "./assets/img/logo.png"

export default function Welcome({jogoIniciado, setJogoIniciado}) {

    function iniciarJogo(){
        let estadoJogo = (!jogoIniciado);
        setJogoIniciado(estadoJogo);
    }

    return (
        <div className="screen-container2">
            <div className="tela-welcome">
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <div onClick={iniciarJogo} data-test="start-btn" className="botao-iniciar">
                <p>Iniciar Recall</p>
            </div>
        </div>
        
    )
}