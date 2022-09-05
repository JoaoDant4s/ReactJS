import { useContext } from 'react'
import { CounterContext } from "../context1/CounterContext"
export const useCounterContext = () => {
  const context = useContext(CounterContext)

  if(!context) {
    console.log("Contexto não encontrado")
  }

  return context
}

export default useCounterContext