const ChangeMessageState = (props) => {
    const messages = ["salve", "fala", "eai, craque?", "fala fml"]
  
    return (
    <div>
        <button onClick={() => props.handleMessage(messages[0])}>1</button>
        {console.log(props)}
        <button onClick={() => props.handleMessage(messages[1])}>2</button>
        <button onClick={() => props.handleMessage(messages[2])}>3</button>
        <button onClick={() => props.handleMessage(messages[3])}>4</button>
    </div>
  )
}

export default ChangeMessageState