import {useState} from "react";
const ManageData = () => {
  let data = 10;

  let [number, setNumber] = useState(15);
  
  return (
    <div>
      <div>
        <p>Valor: {data}</p>
        <button button onClick={() => (data = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor com useState: {number}</p>
        <button onClick={() => setNumber(++number)}>Incrementar</button>
      </div>
      <button onClick={() => setNumber(number = 0)}>Zerar</button>
    </div>
  )
}

export default ManageData