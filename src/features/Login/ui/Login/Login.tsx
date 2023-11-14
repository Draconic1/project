import { Box } from '@mui/material';

import { LoginForm } from '../LoginForm';

import styles from './Login.module.css';

import type { FC } from 'react';

export const Login: FC = () => (
    <Box
        alignItems='center'
        display='flex'
        height='100vh'
        justifyContent='center'
    >
        <LoginForm className={styles.loginForm} />
    </Box>
);
