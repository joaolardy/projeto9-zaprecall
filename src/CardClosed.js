import buttonPlay from "./assets/img/seta_play.png";
import cards from "./cards";
import CardOpen from "./CardOpen";
import { useState } from "react";

export default function CardClosed({ numPergunta, answer, question, contador, setContador}) {
    const [open, setOpen] = useState(false);
    function abrirCard() {
        setOpen(true);
    }

    if (!open === true) {
        return (
            <div className="pergunta-fechada">
                <p>Pergunta {numPergunta + 1}</p>
                <img onClick={abrirCard} src={buttonPlay} alt="botao play" />
            </div>
        )
    }
    if(open === true){
        return(
            <CardOpen contador={contador} setContador={setContador} question={question} answer={answer} numPergunta={numPergunta} />
        )
    }

}