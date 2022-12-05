export default function RespostaCard({ answer, numPergunta }) {

    return (
        <div className="pergunta-aberta">
            <p>{answer}</p>
            <div className="container-botoes">
                <button className="botao red">
                    Não lembrei
                </button>
                <button className="botao yellow">
                    Quase não lembrei
                </button>
                <button className="botao green">
                    Zap!
                </button>
            </div>
        </div>
    )
}