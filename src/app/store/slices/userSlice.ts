import {RootState} from "@app/store/store.ts";
import {IUser} from "@app/types";
import {createSlice} from "@reduxjs/toolkit";

interface IUserSlice {
  user: IUser;
  balance: number,
}

const initial = {
  balance: 100
} as IUserSlice;

const user = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {
    set: (state, {payload}: { payload: IUser }) => {
      state.user = payload;
    },
    setBalance: (state, {payload}: { payload: number }) => {
      state.balance = payload;
    }
  },
});

export const selectUser = (state: RootState): IUserSlice => state.user;
export const {
  set: setUser,
  setBalance
} = user.actions;
export default user.reducer;