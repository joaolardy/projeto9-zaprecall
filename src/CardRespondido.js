import redIcon from "./assets/img/icone_erro.png"
import yellowIcon from "./assets/img/icone_quase.png"
import greenIcon from "./assets/img/icone_certo.png"

export default function CardRespondido({ numPergunta, resposta }) {
    if (resposta === 'red') {
        return (<div data-test="flashcard" className="pergunta-fechada">
            <p className="red-text">Pergunta {numPergunta + 1}</p>
            <img src={redIcon} data-test="no-icon" alt="icone erro" />
        </div>)
    }
    if (resposta === 'yellow') {
        return (<div data-test="flashcard" className="pergunta-fechada">
            <p className="yellow-text">Pergunta {numPergunta + 1}</p>
            <img src={yellowIcon} data-test="partial-icon" alt="icone parcial" />
        </div>)
    }

    if (resposta === 'green') {
        return (<div data-test="flashcard" className="pergunta-fechada">
            <p className="green-text" data-test="flashcard-text">Pergunta {numPergunta + 1}</p>
            <img src={greenIcon} data-test="zap-icon" alt="icone zap" />
        </div>)
    }
}