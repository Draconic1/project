import type { RootState } from '@app';

export const getSystemAmount = (state: RootState) => state.system.object;
