import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.freeze({
    data: {},
    error: {},
    loading: {}
});

const user = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            resetUser: () => initialState,
            setError: (state, action) => {
                const { type } = action.payload;
                state.error[type] = true;
            },
            getUser: state => {
                state.loading.user = true;
            },
            setUser: (state, action) => {
                const { data } = action.payload;
                state.loading.user = false;
                state.data = data;
            }
        }
    }
);

export const {
    getUser, setUser,
    setError, resetUser
} = user.actions;

export default user.reducer;
