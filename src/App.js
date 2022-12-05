import { useState } from "react";
import Main from "./Main";
import Welcome from "./Welcome";

function App() {
    const [jogoIniciado, setJogoIniciado] = useState(true);
    
    return (
        <>
        {(jogoIniciado === true) ? <Main /> : <Welcome jogoIniciado={jogoIniciado} setJogoIniciado={setJogoIniciado} />}
        </>
    );
}

export default App;
