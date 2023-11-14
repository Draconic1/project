import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@api';
import { useAppDispatch } from '@shared/hooks';
import { systemSlice } from '@entities/system';

export type SystemData = number;
export type SystemBody = number;
const dispatch = useAppDispatch();

export const fetchSystemAmount = createAsyncThunk('system/fetchSystemAmount', async () => {
  const { data } = await api.system.systemAmountList();
  dispatch(systemSlice.actions.setAmount(data));
  return data;
});
