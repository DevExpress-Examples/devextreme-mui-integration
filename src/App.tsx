import { useState, useRef } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import DxButton from 'devextreme-react/button';
import styled, { InterpolationFunction, ThemeProvider } from 'styled-components';
import TextBox from 'devextreme-react/text-box';
import MUIFormDxEditors from './MUI-Form-with-DX-editors';
import { unstable_styleFunctionSx, SxProps, Box, createTheme } from '@mui/system';
import { useFormControlContext } from '@mui/base/FormControl';
import DxFormMUIEditors from './DX-Form-with-MUI-editors';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import 'devextreme/dist/css/dx.light.css';

import './App.css'
interface DivProps {
  sx?: SxProps;
}
const Div = styled('div')<DivProps>(
  unstable_styleFunctionSx as InterpolationFunction<DivProps>,
);

interface DxButtonWrappedProps {
  sx?: SxProps;
}
const DxButtonWrapped = styled(DxButton)<DivProps>(
  unstable_styleFunctionSx as InterpolationFunction<DivProps>,
);

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

function App() {
  return (
    <>
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
    </>
  )
}

export default App
