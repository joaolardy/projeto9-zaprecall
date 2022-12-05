import { useState } from "react"
import CardRespondido from "./CardRespondido";

export default function RespostaCard({ answer, numPergunta, contador, setContador}) {
    const [respondido, setRespondido] = useState(false);
    const [resposta, setResposta] = useState('');
    

    function naoLembrei() {
        setRespondido(true);
        setResposta('red');
        setContador(contador + 1);
    }
    function quaseNao() {
        setRespondido(true);
        setResposta('yellow');
        setContador(contador + 1);
    }
    function zap() {
        setRespondido(true);
        setResposta('green');
        setContador(contador + 1);
    }

    if (respondido === false) {
        return (
            <div data-test="flashcard" className="pergunta-aberta">
                <p data-test="flashcard-text">{answer}</p>
                <div className="container-botoes">

                    <button onClick={naoLembrei} data-test="no-btn" className="botao red">
                        Não lembrei
                    </button>
                    <button onClick={quaseNao} data-test="partial-btn" className="botao yellow">
                        Quase não lembrei
                    </button>
                    <button onClick={zap} data-test="zap-btn" className="botao green">
                        Zap!
                    </button>
                </div>
            </div>
        )
    }
    if (respondido === true) {
        return (
            <CardRespondido numPergunta={numPergunta} resposta={resposta} />
        )
    }
}