const ShowUserName = (props) => {
  return (
    <div>
        <h1>O nome do usuário é: {props.name}</h1>
        <p>Tipo do nome de usuário: {typeof props.name}</p>
    </div>
  )
}

export default ShowUserName