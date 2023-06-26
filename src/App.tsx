import { useState, useRef } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import DxButton from 'devextreme-react/button';
import styled, { InterpolationFunction, ThemeProvider } from 'styled-components';
import TextBox from 'devextreme-react/text-box';
import MUIFormDxEditors from './MUI-Form-with-DX-editors';
import { unstable_styleFunctionSx, SxProps, Box, createTheme } from '@mui/system';
import { useFormControlContext } from '@mui/base/FormControl';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

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

function ControlStateDisplay() {
  const formControlContext = useFormControlContext();
  if (formControlContext === undefined) {
    return null;
  }

  const { value, focused } = formControlContext;

  return (
    <p>
      { }
      {focused ? 'focused' : 'not focused'}
    </p>
  );
}

function App() {
  return (
    <>
      <MUIFormDxEditors />
    </>
  )
}

export default App
