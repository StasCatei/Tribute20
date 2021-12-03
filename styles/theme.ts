// Create a theme instance.
import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#3A5AF9',
  }
};

const theme = createTheme({
  palette: { ...palette },
  typography: {
    fontFamily: '"Epilogue", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
});

export default theme;