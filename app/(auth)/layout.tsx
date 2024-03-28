import { ThemeProvider } from '@/context/ThemeProvider';
import React from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="ar">
      <body className=" flex justify-center w-screen	h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default Layout