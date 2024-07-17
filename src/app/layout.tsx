import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/ui/navbar';

import type { Metadata } from "next";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonzy quiere leer",
  description: "Aplicación simple para leer cositas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='m-auto bg-gray-50 dark:bg-slate-950' >
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
