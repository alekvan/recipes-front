import { createSlice } from '@reduxjs/toolkit';

export const userLogin = createSlice({
  name: 'userLogin',
  initialState: {
    user: {
      userId: '',
      isLoggedIn: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem('token');
      state.user = action.payload;
    },
  },
});

export const { login, logout } = userLogin.actions;

export const selectUser = (state) => state.user.user;

export default userLogin.reducer;
