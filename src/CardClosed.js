import buttonPlay from "./assets/img/seta_play.png";
import cards from "./cards";
import CardOpen from "./CardOpen";
import { useState } from "react";

export default function CardClosed({ numPergunta, answer, question}) {
    const [open, setOpen] = useState(false);
    function abrirCard() {
        setOpen(true);
    }

    if (!open === true) {
        return (
            <div onClick={abrirCard} className="pergunta-fechada">
                <p>Pergunta {numPergunta + 1}</p>
                <img src={buttonPlay} alt="botao play" />
            </div>
        )
    }
    if(open === true){
        return(
            <CardOpen question={question} answer={answer} numPergunta={numPergunta} />
        )
    }

}