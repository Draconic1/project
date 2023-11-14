import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper/Paper';

import { AuthorizedLayout } from '@layouts/AuthorizedLayout';
import { DisciplineTabs } from '@widgets/Tabs';
import { DisciplineCard } from '@widgets/cards/disciplinecards';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  boxShadow: 'none',
}));

const DisciplinesPage = () => {
  return (
    <AuthorizedLayout>
      <Box display='flex'>
        <Grid container>
          <Grid
            item
            xs={3}
          >
            <Item>
              <DisciplineTabs />
            </Item>
          </Grid>

          <Grid
            container
            xs={9}
          >
            <Item>
              <DisciplineCard />
            </Item>
            <Item>
              <DisciplineCard />
            </Item>
            <Item>
              <DisciplineCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </AuthorizedLayout>
  );
};

export default DisciplinesPage;
