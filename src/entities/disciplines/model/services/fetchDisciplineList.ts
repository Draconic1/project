import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@api';
import { useAppDispatch } from '@shared/hooks';
import { disciplineSlice } from '../slice/disciplineSlice';

export type DisciplineData = void;
export type DisciplineBody = void;
const dispatch = useAppDispatch();

export const fetchDisciplineList = createAsyncThunk<DisciplineData, DisciplineBody>(
  'discipline/fetchDisciplineList',
  async () => {
    const { data } = await api.discipline.disciplineList();
    dispatch(disciplineSlice.actions.setDisciplineList(data));
    return data;
  }
);
