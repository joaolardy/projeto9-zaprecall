import buttonPlay from "./assets/img/seta_play.png";
import CardOpen from "./CardOpen";
import { useState } from "react";

export default function CardClosed({ numPergunta, answer, question, contador, setContador}) {
    const [open, setOpen] = useState(false);
    function abrirCard() {
        setOpen(true);
    }

    if (!open === true) {
        return (
            <div data-test="flashcard" className="pergunta-fechada">
                <p data-test="flashcard-text">Pergunta {numPergunta + 1}</p>
                <img onClick={abrirCard} data-test="play-btn" src={buttonPlay} alt="botao play" />
            </div>
        )
    }
    if(open === true){
        return(
            <CardOpen contador={contador} setContador={setContador} question={question} answer={answer} numPergunta={numPergunta} />
        )
    }

}