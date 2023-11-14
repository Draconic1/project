import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@shared/ui';

import { routeConfig } from '../../config';
import { PathCheck } from '../PathCheck';

import type { FC } from 'react';

export const AppRouter: FC = () => (
    <PathCheck>
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route
                    element={<Suspense fallback={<Loader />}>{element}</Suspense>}
                    key={path}
                    path={path}
                />
            ))}
        </Routes>
    </PathCheck>
);
