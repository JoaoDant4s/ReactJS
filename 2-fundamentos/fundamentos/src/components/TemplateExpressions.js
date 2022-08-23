import ExampleComponent from "./ExampleComponent"

const TemplateExpressions = () => {
    const name = "João"
    const data = {
        age: 20,
        job: "programmer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job} </p>
            <ExampleComponent />
        </div>
    )
}
export default TemplateExpressions