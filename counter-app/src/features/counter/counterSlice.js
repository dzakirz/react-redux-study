import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
  text: ""
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
      if (state.count >= 100) {
        state.count = 100
        state.text = "max"
      }
      if(state.count < 10) state.text = ""
    },
    decrement: (state) => {
      state.count -= 1
      if(state.count <= 0) {
        state.count = 0 
        state.text = "min"
      }
      if (state.count > 0) state.text = ""
    },
    reset: (state) => {
      state.count = 0
      state.text = ""
    },
    incrementByAmount: (state,action) => {
      state.count += action.payload
      if (state.count >= 100) {
        state.count = 100
        state.text = "max"
      }
      if (state.count < 10) state.text = ""
    }
  },
})

export const { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount 
} = counterSlice.actions

export default counterSlice.reducer