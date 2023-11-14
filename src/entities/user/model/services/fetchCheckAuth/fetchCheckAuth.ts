import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@api';

import type { CheckAuthBody, CheckAuthData } from './fetchCheckAuth.types';

export const fetchCheckAuth = createAsyncThunk<CheckAuthData, CheckAuthBody>('checkAuth/fetchCheckAuth', async () => {
  const { data } = await api.whoami.whoamiList();

  return '123';
});
