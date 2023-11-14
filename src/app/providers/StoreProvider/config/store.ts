import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@entities/user';
import { disciplineReducer } from '@entities/disciplines/model/slice/disciplineSlice';
import { systemReducer } from '@entities/system';

export const store = configureStore({
  reducer: { user: userReducer, discipline: disciplineReducer },
});
