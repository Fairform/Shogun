'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
// Update the import path below if your theme file is located elsewhere
import theme from '../theme/theme';
import { ReactNode } from 'react';

export default function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}