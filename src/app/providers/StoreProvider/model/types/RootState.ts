import type { store } from '../../config';

export type RootState = ReturnType<typeof store.getState>;
