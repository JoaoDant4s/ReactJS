import {useState} from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Matheus")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        <h1>If ternário</h1>
        <p>Nome: {name}</p>
        {name === "João" ? (
        <div>
            <p>O nome dele é joão</p>
        </div>
        ) : ( 
        <div>
            <p>O nome dele não é João</p>
        </div>
        )}
        <button onClick={() => setName("João")}>Mude o nome aqui</button>
    </div>
  )
}

export default ConditionalRender