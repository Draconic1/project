import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@api';

import type { LogoutData, LogoutBody } from './fetchLogout.types';

export const fetchLogout = createAsyncThunk<LogoutData, LogoutBody>('logout/fetchLogout', async () => {
  api.token.tokenRefreshCreate;
});
