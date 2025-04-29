import { createTheme } from '@mui/material/styles';

// Create a function that returns a theme based on direction and language
const getTheme = (direction: 'ltr' | 'rtl', language: 'en' | 'ar') => {
  return createTheme({
    direction: direction,
    palette: {
      primary: {
        main: '#B45333',
        light: '#e0c0b6',
        dark: '#9D4223',
      },
      secondary: {
        main: '#575656',
        light:'#575656',
      },
      text: {
        primary: '#1D1D1D',
      },
      divider:'#E9E9E9',
    },
    typography: {
      fontFamily: language === 'ar' ? 'Amiri, serif' : 'Roboto, sans-serif',
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
            root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' && 
                ownerState.color === 'secondary' && {
                backgroundColor: '#F6F6F6',
                color: '#575656',
                boxShadow: 'none',
                
                '&:hover': {
                backgroundColor: '#E0E0E0',
                },
    
                '&:active': {
                backgroundColor: '#D0D0D0',
                },
    
            }),
            }),
        },
      
      },
    },
  });
};

export default getTheme;