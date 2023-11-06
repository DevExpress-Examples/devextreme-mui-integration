import { ThemeProvider } from 'styled-components';

import MUIFormDxEditors from './MUI-Form-with-DX-editors';
import { Box, createTheme } from '@mui/system';
import DxFormMUIEditors from './DX-Form-with-MUI-editors';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import 'devextreme/dist/css/dx.light.css';

import './App.css'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#EBE7E7',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
    error: {
      main: '#FF6666'
    }
  },
});

function App() {
  return (
    <div id='app'>
      <div id="app-container">
        <ThemeProvider theme={theme}>
          <div>Mui Form with DX editors</div>
          <Box sx={{ p: 2, border: '1px dashed grey', display: 'flex', color: theme.palette.text.primary }}>
            <MUIFormDxEditors />
          </Box>
          <div>DX Form with MUI editors</div>
          <Box sx={{ p: 2, border: '1px dashed grey', display: 'flex', color: theme.palette.text.primary }}>
            <DxFormMUIEditors />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
