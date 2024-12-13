import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserModelState {
    userName?: string;
    password?: string;
    token?: string;
}

const initialState: UserModelState = {
    userName: undefined,
    password: undefined,
    token: undefined,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserModelState>) => {
            const { userName, password, token } = action.payload;

            state.userName = userName;
            state.password = password;
            state.token = token;
        },
        clearUser: (state) => {
            state.userName = undefined;
            state.password = undefined;
            state.token = undefined;
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;