import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/joy';
import { getRouteDisciplineTaking } from '@shared/constants/routes';
import { useNavigate } from 'react-router-dom';

export const DisciplineCard = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate(getRouteDisciplineTaking()); //eg.history.push('/login');

  return (
    <Card
      sx={{
        height: 200,
        borderRadius: '20px',
        border: '0.5px solid rgba(251, 174, 56, 0.80)',
        boxShadow: 'none',
      }}
    >
      <CardHeader
        sx={{ backgroundColor: 'rgba(251, 174, 56, 0.80)', color: '#FFFFFF', textAlign: 'center' }}
        title='Дисциплина'
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Button
          variant='plain'
          color='neutral'
          onClick={navigateTo}
        >
          Пройти
        </Button>
      </CardContent>
      <div>Дисцилины:</div>
    </Card>
  );
};
