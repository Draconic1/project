import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { DisciplineIcon } from '@shared/ui/icons/discipline-icon';
import './homecards.css';
export {};

export const RedCard = () => {
  return (
    <>
      <Box>
        <div
          id='card'
          className='card redcard'
        >
          <DisciplineIcon />
          <Typography
            variant='h5'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white', margin: 0 }}
          >
            Дисциплин:
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Преподавателей:
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Студентов:
          </Typography>
        </div>
      </Box>
    </>
  );
};
