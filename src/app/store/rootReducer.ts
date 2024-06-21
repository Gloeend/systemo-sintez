import { combineReducers } from 'redux';
import {api} from "@app/store/api/api.ts";
import userSlice from "@app/store/slices/userSlice.ts";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userSlice
});
