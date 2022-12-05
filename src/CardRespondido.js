import redIcon from "./assets/img/icone_erro.png"
import yellowIcon from "./assets/img/icone_quase.png"
import greenIcon from "./assets/img/icone_certo.png"

export default function CardRespondido({ numPergunta, resposta }) {
    if (resposta === 'red') {
        return (<div className="pergunta-fechada">
            <p className="red-text">Pergunta {numPergunta + 1}</p>
            <img src={redIcon} alt="botao play" />
        </div>)
    }
    if (resposta === 'yellow') {
        return (<div className="pergunta-fechada">
            <p className="yellow-text">Pergunta {numPergunta + 1}</p>
            <img src={yellowIcon} alt="botao play" />
        </div>)
    }

    if (resposta === 'green') {
        return (<div className="pergunta-fechada">
            <p className="green-text">Pergunta {numPergunta + 1}</p>
            <img src={greenIcon} alt="botao play" />
        </div>)
    }
}