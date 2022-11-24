import "./index.css";

function QuestionCard({ preguntaActual, selectedAnswers, setselectedAnswers, mostrarResultado }) {
    function seleccionarRespuesta(identificador, valorOpcion) {
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        setselectedAnswers([...otrasRespuestas,
        {
            identificador,
            valorOpcion
        }
        ])
    }

    return (
        <div className="box">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong> {preguntaActual.question} </strong></span>
            <br />
            {
                preguntaActual.answers.map((opcion) => (
                    <div key={opcion.id} onChange={() => seleccionarRespuesta(preguntaActual.id, opcion.is_correct)}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                        <label htmlFor={`${preguntaActual.id}`} className={ mostrarResultado ?
                        opcion.is_correct ? "has-text-primary" : "as-text-danger": ""}>{opcion.answer}</label>
                    </div>
                ))
            }
            <br />
        </div>
    )
}
export default QuestionCard;