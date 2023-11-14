import { LogoutOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, Box, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { fetchLogout } from '@entities/user';

import { useAppDispatch } from '@shared/hooks';

import { headerLinks } from './Header.consts';

export const Header = () => {
    const dispatch = useAppDispatch();

    const handleLogoutClick = () => {
        dispatch(fetchLogout());
    };

    return (
        <AppBar
            color='default'
            position='static'
        >
            <Toolbar variant='regular'>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    width='100vw'
                >
                    <Box
                        alignItems='center'
                        display='flex'
                        gap='32px'
                    >
                        {headerLinks.map(({ title, to }) => (
                            <Link
                                component={RouterLink}
                                key={to}
                                to={to}
                                underline='none'
                            >
                                {title}
                            </Link>
                        ))}
                    </Box>
                    <Button
                        startIcon={<LogoutOutlined />}
                        variant='contained'
                        onClick={handleLogoutClick}
                    >
                        Выйти
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
