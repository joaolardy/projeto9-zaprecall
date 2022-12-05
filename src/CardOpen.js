import { useState } from "react";
import buttonTurn from "./assets/img/seta_virar.png";
import RespostaCard from "./RespostaCard";

export default function CardOpen({question, answer, numPergunta}){

    const [virado, setVirado] = useState(false);
    function virarCard(){
        setVirado(true)
    }

    if(virado === false){
        return(
            <div className="pergunta-aberta">
                <p>{question}</p>
                <img onClick={virarCard} src={buttonTurn} alt="botao virar" />
            </div>
        )
    }
    if(virado === true){
        return(
            <RespostaCard answer={answer} numPergunta={numPergunta} />
        )
    }

}