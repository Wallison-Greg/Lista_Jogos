function Section(props) {
    return (
        <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul className={props.className}>
                        {props.children}{/* recebendo o componente com o seus valores do arquivo "lista.js" */}
                    </ul>
                </div>
        </section>
    )
}

export default Section;