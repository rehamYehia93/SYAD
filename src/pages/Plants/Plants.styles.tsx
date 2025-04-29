import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    '& .ETab': {
      color: theme.palette.common.black,
      fontSize: theme.spacing(2),
    },
    '& .ECard': {
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      border: `1px solid ${theme.palette.divider}`,
      textAlign: 'center',
      margin: theme.spacing(2),
      color: theme.palette.primary.main,
      display: 'block',
      textDecoration: 'none',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      '&:hover': {
        boxShadow: theme.shadows[4], // Elevation on hover
        transform: 'translateY(-4px)', // Slight lift
      },
    },
    '& .EImage': {
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: theme.spacing(1),
      transition: 'transform 0.3s ease, filter 0.3s ease',
      [theme.breakpoints.up("md")]: {
        height: "200px",
      },
    },
    '& .ECard:hover .EImage': {
      transform: 'scale(1.02)', // Slight zoom
      filter: 'brightness(0.95)', // Slightly darken for depth
    },
  }));
  export default StyledBox;