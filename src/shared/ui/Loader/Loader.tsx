import { Box, CircularProgress } from '@mui/material';

import type { FC } from 'react';

export const Loader: FC = () => (
    <Box
        alignItems='center'
        display='flex'
        height='100vh'
        justifyContent='center'
        left='0'
        position='fixed'
        top='0'
        width='100%'
    >
        <CircularProgress />
    </Box>
);
