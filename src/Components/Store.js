import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmail, setPassword, logout } = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});



