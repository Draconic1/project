import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@api';

import type { LoginData, LoginBody } from './fetchLogin.types';

export const fetchLogin = createAsyncThunk<LoginData, LoginBody>('login/fetchLogin', async (body) => {
  const { data } = await api.token.tokenCreate(body);

  return data;
});
