import { configureStore } from '@reduxjs/toolkit';
import loginReducer  from './loginReducer';
import userInfoReducer  from './userInfoReducer';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    userInfo: userInfoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
