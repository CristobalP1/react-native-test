import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";


const store = configureStore({
    reducer: {
        auth: userReducer,
        products: productsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;