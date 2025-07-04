'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import theme from '../theme/theme';
import { ReactNode } from 'react';

export default function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </NextThemesProvider>
  );
}