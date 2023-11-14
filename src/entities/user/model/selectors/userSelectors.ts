import type { RootState } from '@app';

export const getUserIsAuth = (state: RootState) => state.user.isAuth;
export const getUserIsInit = (state: RootState) => state.user.isInit;
// export const getUserRole = (state: RootState) => undefined;
export const getUserToken = (state: RootState) => state.user.accessToken;

// export const getDicsiplines = (state: RootState) => state.dicsiplines.enum;
