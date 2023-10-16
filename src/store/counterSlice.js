import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const CounterSlice = createSlice({
name:"counter",
initialState:{
    value:1

},
reducers:{
    increase:(state,{payload})=>{
       if(state.value < payload){
        state.value += 1
       }
    },
    decrease:(state)=>{
        if (state.value > 1){
            state.value -= 1
        }
    }
}
})


export default CounterSlice.reducer;
export const {increase,decrease} = CounterSlice.actions;