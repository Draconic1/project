import { getRouteHome } from '@shared/constants';

interface HeaderLink {
    title: string;
    to: string;
}

export const headerLinks: HeaderLink[] = [
    {
        title: 'Logo',
        to: getRouteHome(),
    },
];
