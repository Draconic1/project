import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TaskIcon } from '@shared/ui/icons/task-icon';

import './homecards.css';

export const BlueCard = () => {
  return (
    <>
      <Box>
        <div
          id='card'
          className='card bluecard'
        >
          <TaskIcon />
          <Typography
            variant='h5'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white', margin: 0 }}
          >
            Задания:
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ color: 'white', margin: 0 }}
          >
            Ожидают проверки:
          </Typography>
        </div>
      </Box>
    </>
  );
};
