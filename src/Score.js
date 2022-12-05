import cards from "./cards"

export default function Score({contador, setContador}){
    return(
        <div data-test="footer" className="footer-concluidos">
            {contador}/{cards.length}
        </div>
    )
}