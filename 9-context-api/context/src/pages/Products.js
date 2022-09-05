import React from 'react'

import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from '../context1/CounterContext'
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Products = () => {
  const { counter } = useContext(CounterContext)

  //5 - context mais complexo
  const { color } = useTitleColorContext()

  return (
    <div>
      <h1 style={{color : color}}>Produtos</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Products