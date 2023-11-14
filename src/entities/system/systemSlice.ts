import { createSlice } from '@reduxjs/toolkit';

interface System {
  discipline_count?: number;
  teacher_count?: number;
  student_count?: number;
}

type SystemState = {
  object: System[];
};

const initialState: SystemState = {
  object: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setAmount: (state, { payload }) => {
      state.object = payload.system;
    },
  },
  extraReducers(builder) {},
});

export const { reducer: systemReducer } = systemSlice;
