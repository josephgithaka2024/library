import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
    title: 'Library',
};

const workSans = localFont({
    src: [
        {
            path: '../public/fonts/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../public/fonts/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
