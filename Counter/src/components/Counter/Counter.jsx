import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementByAmount
} from '../../features/counter/counterSlice'
import { Container } from './CounterStyle'

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0)
  const count = useSelector((state) => state.counter.count)
  const text = useSelector((state) => state.counter.text)
  const dispatch = useDispatch()

  const addValue = Number(incrementAmount) || 0

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(addValue))
  }

  return (
    <Container>
      <p>{text}</p>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
      </div>

      <input 
        type="text"
        value={incrementAmount}
        onChange={(e)=> setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={handleIncrementByAmount}>Add Amount</button>
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </Container>
  )
}

export default Counter