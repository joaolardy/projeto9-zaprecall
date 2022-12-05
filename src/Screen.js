import Logo from "./Logo"
import Deck from "./Deck"

export default function Screen({contador, setContador}){
    return(
        <div className="screen-container">
            <Logo />
            <Deck contador={contador} setContador={setContador} />
        </div>
    )
}