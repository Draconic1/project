import { useEffect, type FC } from 'react';
import { useSelector } from 'react-redux';

import { fetchCheckAuth, getUserIsInit } from '@entities/user';

import { useAppDispatch } from '@shared/hooks';
import { Loader } from '@shared/ui';

import { AppRouter } from './providers';

export const App: FC = () => {
    const dispatch = useAppDispatch();

    const isInit = useSelector(getUserIsInit);

    useEffect(() => {
        !isInit && dispatch(fetchCheckAuth());
    });

    if (!isInit) {
        return <Loader />;
    }

    return <AppRouter />;
};
