import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    borderBottom:`1ps solid ${theme.palette.primary.main}`,
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 6,
    },
    '& .PCImgContainer':{
        borderRadius: theme.spacing(1),
    },
    '& .PLocation':{
        display:'flex',
        alignItems:'center',
        gap: theme.spacing(1),
        color: theme.palette.text.secondary,
    }
  }));