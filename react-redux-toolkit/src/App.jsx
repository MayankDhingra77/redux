import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment , reset ,incrementByAmount} from './features/counter/CounterSlice';
import { useState } from 'react';
function App() {
  const [amount , setAmount] = useState(0) 
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() ;
  function handleIncrement(){
    dispatch(increment()) ;
  }
  function handleDecrement(){
    dispatch(decrement()) ;
  }
  function handleReset(){
    dispatch(reset()) ;
  }
  function handleAmount(){
    dispatch(incrementByAmount(amount)) ;
  }
  return (
    <>
      <div className="container">
        <p>Count is {count}</p>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <input type="number" value = {amount} placeholder='Enter your number' onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={handleAmount}>change by amount</button>
      </div>
    </>
  )
}

export default App
