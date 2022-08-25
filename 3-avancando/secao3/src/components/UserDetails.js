const UserDetails = ({id, name, age, main}) => {
    return (
    <div>
        <h1>Usuário</h1>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Main: {main}</li>
            <li>Pode dirigir? {age >= 18 ? <p>Sim</p> : <p>Não</p>}</li>
        </ul>
    </div>
  )
}

export default UserDetails