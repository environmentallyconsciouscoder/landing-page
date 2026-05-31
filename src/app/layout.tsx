import "./globals.css";

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: './fonts/Nohemi-Regular-BF6438cc579d934.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nohemi-Light-BF6438cc5702321.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/Nohemi-ExtraLight-BF6438cc581502c.woff',
      weight: '200',
      style: 'extra light',
    },
    {
      path: './fonts/Nohemi-Thin-BF6438cc57e2011.woff',
      weight: '100',
      style: 'thin',
    },
  ],
  variable: "--font-nohemi",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>RetroSet App</title>
        {/* Prevent flash of wrong theme on load */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();` }} />
      </head>

      <body className={`${myFont.variable} ${myFont.className}`}>
      {children}
      </body>
    </html>
  );
}

