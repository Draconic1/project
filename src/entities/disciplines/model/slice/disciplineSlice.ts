import { createSlice } from '@reduxjs/toolkit';

interface Discipline {
  discipline_id?: string;
  discipline_title: string;
  discipline_title_short?: string;
  discipline_status?: string;
  end_date?: string | null;
}

type DisciplineState = {
  discipline: Discipline[];
};

const initialState: DisciplineState = {
  discipline: [],
};

export const disciplineSlice = createSlice({
  name: 'discipline',
  initialState,
  reducers: {
    setDisciplineList: (state, { payload }) => {
      state.discipline = payload.discipline;
    },
  },
  extraReducers(builder) {},
});

export const { reducer: disciplineReducer } = disciplineSlice;
