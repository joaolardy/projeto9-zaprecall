import Screen from "./Screen"
import Score from "./Score"
import { useState } from "react";

export default function Main(){

    const [contador, setContador] = useState(0);
    return(
        <>
            <Screen  contador={contador} setContador={setContador} />
            <Score  contador={contador} setContador={setContador} />
        </>
    )
}