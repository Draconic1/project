import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const HomeStepper = () => {
  return (
    <Card sx={{ maxWidth: 'flex' }}>
      <CardMedia
        sx={{ height: 430 }}
        image='https://guimc.bmstu.ru/wp-content/uploads/2023/05/955aea0d-8adf-456f-861e-500194f58cc8.jpeg'
        title='guimc'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          Когнитивный тренажер
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Текст о системе Текст о системе Текст о системе Текст о системе Текст о системе Текст о системе Текст о
          системе Текст о системе
        </Typography>
      </CardContent>
    </Card>
  );
};
