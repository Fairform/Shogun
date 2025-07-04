'use client'; // Added to fix client-side rendering

import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import ThemeProviders from '../providers/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Fairform - Instant Compliance Policy Packs</title>
        <meta name="description" content="Generate audit-ready compliance policy packs for Australian small businesses" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProviders>
          <CssBaseline />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}