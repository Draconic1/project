import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TrainingTypeIcon } from '@shared/ui/icons/training-types-icon';

import './homecards.css';

export const YellowCard = () => {
  return (
    <>
      <Box>
        <div
          id='card'
          className='card yellowcard'
        >
          <TrainingTypeIcon />
          <Typography
            variant='h5'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white', margin: 0 }}
          >
            Виды тренинга:
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Чтение
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Говорение
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Аудирование
          </Typography>
        </div>
      </Box>
    </>
  );
};
