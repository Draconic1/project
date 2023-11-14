import { Provider } from 'react-redux';

import { store } from '../config';

import type { FC, ReactNode } from 'react';

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => <Provider store={store}>{children}</Provider>;
