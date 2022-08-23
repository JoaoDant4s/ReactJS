const Challenge = () => {
    let num1 = 6, num2 = 7
    const handleSum = () => {
        console.log(num1 + num2)
    }
    return(
        <div>
            <h2>Primeiro número: {num1}</h2>
            <h2>Segundo número: {num2}</h2>
            <button onClick={handleSum}>
                Some os dois valores
            </button>
        </div>
    )
}

export default Challenge