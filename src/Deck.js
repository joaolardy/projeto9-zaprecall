import CardClosed from "./CardClosed"
import CardOpen from "./CardOpen"
import { useState } from "react"
import cards from "./cards"

export default function Deck() {
    const cardsTotais = [...cards];
    const cardsImpressos = [];

    cardsTotais.forEach((card, i) => {
        cardsImpressos.push(<CardClosed numPergunta={i} question={card.question} answer={card.answer} open={card.open}/>);
    });

    return (
        <div>
            {cardsImpressos}
        </div>
    )
}