import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper/Paper';

import { AuthorizedLayout } from '@layouts/AuthorizedLayout';

import { HomeStepper } from '@widgets/Stepper';
import { BlueCard, RedCard, YellowCard } from '@widgets/cards/homecards';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  boxShadow: 'none',
}));

const HomePage = () => {
  return (
    <AuthorizedLayout>
      {' '}
      <Box display='flex'>
        <Grid
          container
          spacing={0}
        >
          <Grid
            item
            xs={6}
          >
            <Item>
              <HomeStepper />
            </Item>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Item>
              <RedCard />
            </Item>
            <Item>
              <YellowCard />
            </Item>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Item>
              <BlueCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </AuthorizedLayout>
  );
};

export default HomePage;
