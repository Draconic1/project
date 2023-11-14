import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { matchPath, useLocation, useMatch, useNavigate } from 'react-router-dom';

import { getUserToken } from '@entities/user';

import { getRouteLogin, getRouteNotFound, getRouteHome } from '@shared/constants';

import { routeConfig } from '../../config';

import type { FC, ReactNode } from 'react';

interface PathCheckProps {
    children: ReactNode;
}

export const PathCheck: FC<PathCheckProps> = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // const role = useSelector(getUserRole);
    const isLogged = useSelector(getUserToken) != null;
    const paths = routeConfig.map(({ path }) => path);
    const isLoginPage = useMatch(getRouteLogin());

    useEffect(() => {
        const isMatch = paths.some((path) => matchPath(path, pathname));

        if (!isMatch) {
            navigate(getRouteNotFound());
        }
    }, [navigate, pathname, paths]);

    useEffect(() => {
        if (!isLogged && !isLoginPage) {
            navigate(getRouteLogin());
        }

        if (isLogged && isLoginPage) {
            navigate(getRouteHome());
        }
    }, [isLoginPage, navigate, isLogged]);

    return <>{children}</>;
};
