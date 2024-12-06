import type { Metadata } from 'next';
import * as style from './global.css';
import { Provider } from 'jotai';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={style.container}>{children}</body>
      </Provider>
    </html>
  );
}
