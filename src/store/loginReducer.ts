import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*
export interface CounterState {
  value: number
  incrementAmount: number
}

const initialState: CounterState = {
  value: 2,
  incrementAmount : 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount
    },
    decrement: (state) => {
      state.value -= state.incrementAmount
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload
    },
  },
})

export const { increment, decrement, changeIncrementAmount } = counterSlice.actions

export default counterSlice.reducer*/


export interface ILoginStatus {
    isLogged: boolean;
}

const initialState: ILoginStatus = {
    isLogged: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true
    },
    logOut: (state) => {
      state.isLogged = false
    },
  },
})

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
