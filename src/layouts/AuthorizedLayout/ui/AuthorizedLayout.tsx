import { Box } from '@mui/material';

import NavBar from '@widgets/Navbar/Navbar';

import type { FC, ReactNode } from 'react';

interface AuthorizedLayoutProps {
  children: ReactNode;
}

export const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box padding='67px 80px 0px 80px'>{children}</Box>
    </Box>
  );
};
