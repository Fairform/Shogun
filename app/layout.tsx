import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import ThemeProviders from '@/providers/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

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
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProviders>
          <CssBaseline />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}