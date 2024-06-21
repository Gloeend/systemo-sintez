import {configureStore} from '@reduxjs/toolkit';
import {api} from "@app/store/api/api.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {rootReducer} from "@app/store/rootReducer.ts";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
