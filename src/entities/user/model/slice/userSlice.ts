import { createSlice } from '@reduxjs/toolkit';

import { fetchCheckAuth, fetchLogin, fetchLogout } from '../services';

import type { UserSchema } from '../types';

const initialState: UserSchema = {
  isAuth: false,
  isInit: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.accessToken = payload.access;
      state.refreshToken = payload.refresh;
      state.isAuth = true;
    });
    builder.addCase(fetchLogout.fulfilled, () => ({
      ...initialState,
      isInit: true,
    }));
    builder.addCase(fetchCheckAuth.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.isInit = true;
    });
    builder.addCase(fetchCheckAuth.rejected, (state) => {
      state.isInit = true;
    });
  },
});

export const { reducer: userReducer } = userSlice;
