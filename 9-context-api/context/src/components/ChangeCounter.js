//3 - alteranmdo o contexto
import { useContext } from 'react'
import { CounterContext } from '../context1/CounterContext'

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>++Counter</button>
    </div>
  )
}

export default ChangeCounter