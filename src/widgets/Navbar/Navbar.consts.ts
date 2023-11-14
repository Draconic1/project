import { getRouteHome } from '@shared/constants';

interface NavbarLink {
    title: string;
    to: string;
}

export const navbarLinks: NavbarLink[] = [
    {
        title: 'Logo',
        to: getRouteHome(),
    },
];
