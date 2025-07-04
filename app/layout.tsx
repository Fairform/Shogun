import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-[#1a1a1a]">
      <body className="font-space antialiased">
        <header className="w-full border-b py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">Fairform</Link>
            <nav>
              <Link href="/pricing" className="ml-4">Pricing</Link>
              <Link href="/dashboard" className="ml-4">Dashboard</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}