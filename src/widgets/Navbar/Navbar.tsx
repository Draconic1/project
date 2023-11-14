import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { LogoutIcon } from '@shared/ui/icons/logout-icon';
import { ProfileICon } from '@shared/ui/icons/profiile-icon';
import { DisciplineIcon } from '@shared/ui/icons/discipline-icon';
import { LogoIcon } from '@shared/ui/icons/logo-icon';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@shared/hooks';
import { fetchLogout } from '@entities/user';
import { getRouteDisciplines, getRouteHome } from '@shared/constants/routes';

export default function NavBar() {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(fetchLogout());
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: 'white', boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)' }}
      >
        <Toolbar sx={{ padding: 2, margin: '0px 80px 0px 80px' }}>
          <Link to={getRouteHome()}>
            <LogoIcon />
          </Link>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: 'black', margin: 2 }}
          >
            Когнитивный тренажер
          </Typography>
          <Link to={getRouteDisciplines()}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, color: 'black' }}
            >
              <DisciplineIcon />
            </IconButton>
          </Link>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, color: 'black' }}
          >
            <ProfileICon />
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ color: 'black' }}
            onClick={handleLogoutClick}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
