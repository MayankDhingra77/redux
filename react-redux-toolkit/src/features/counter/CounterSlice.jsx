import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    }, // ye ek action hai isse execute karvane ke liye dispatch use karna padta hai 
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) =>{
        state.value = 0 
    } ,
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset , incrementByAmount } = counterSlice.actions

export default counterSlice.reducer