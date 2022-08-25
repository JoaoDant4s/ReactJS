import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["João", "Jetosbaldo", "Eriberto", "Armando"])

    const [users, setUsers] = useState([
      {id: 1, name: "João", age: 20},
      {id: 2, name: "Dantas", age: 20},
      {id: 3, name: "Aloalo", age: 99}
    ])
    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * (users.length - 1))
      let result = []
      for(let i = 0; i < users.length; i++){
        if(i !== randomNumber){
          result.push(users[i])
        }
      }
      setUsers(result)
    }
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>name: {user.name} - age {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender