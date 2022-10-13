import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
    const [ number, dispatch] = useReducer((state,action) => {
        return Math.random(state)
    })
    const initialTasks = [
        {id: 1, text: "ouvir musica"},
        {id: 2, text: "estudar"},
        {id: 3, text: "dormir"}
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }
                setTaskText("")

                return [...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }
    }
    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: "ADD"})
    }
  return (
    <div>
        <hr />
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Change</button>

        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}> {task.text}</li>
        ))}
    </div>
  )
}

export default HookUseReducer