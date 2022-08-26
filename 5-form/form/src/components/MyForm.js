import './MyForm.css';

import {useState} from 'react';

const MyForm = ({user}) => {
    //controlled input
    //3- gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")
    const handleName = (e) => {
        setName(e.target.value)
    };
    console.log(name)
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)
        //limpar forms
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }
  return (
    <div>
        {/* criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                value={name}/>
            </div>
            {/*label envolvendo o input*/}
            <label>
                <span>E-mail</span>
                {/*state inline*/}
                <input type="email" 
                name="email" 
                placeholder='Digite o seu e-mail' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
            <div>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
            </div>
            {/*select*/}
            <div>
                <label>
                    <span>Função no sistema:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm