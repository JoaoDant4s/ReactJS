import React, { useRef, useState } from 'react'

const HookUseRef = () => {
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        setText("")

        inputRef.current.focus()
    }
  return (
    <div>
        <hr />
        <h2>useRef</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default HookUseRef