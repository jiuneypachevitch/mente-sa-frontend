import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface IUserInfo {
    id: string | null;
    name: string | null;
}

const initialState: IUserInfo = {
    id: "",
    name: ""
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string | null>) =>  {
      state.id = action.payload
    },
    setUserName: (state, action: PayloadAction<string | null>) =>  {
      state.name = action.payload
    },
  },
})

export const { setUserId, setUserName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
