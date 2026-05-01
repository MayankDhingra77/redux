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
        <h1 className='text-4xl p-6'>Counter App </h1>
        <p className='text-2xl flex  justify-center p-4'>Count is {count}</p>
        <div className='flex justify-center gap-14'>
        <button onClick={handleIncrement} className='text-2xl border border-amber-300 p-2'> + </button>
        <button onClick={handleDecrement} className='text-2xl border border-amber-300 p-2'>-</button>
        </div>
        <div className='flex justify-center p-4 gap-2'>
        <button onClick={handleReset} className='border border-amber-200 p-1'  >Reset</button>
        <input type="number" value = {amount} placeholder='Enter your number' onChange={(e) => setAmount(e.target.value)} className='border border-amber-300'/>
        <button onClick={handleAmount} className='border border-amber-200'>change by amount</button>
        </div>
      </div>
    </>
  )
}

export default App
