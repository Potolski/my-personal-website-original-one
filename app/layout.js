import './globals.css';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import ThemeInit from './components/ThemeInit';

export const metadata = {
  title: 'David Potolski — Senior Software Engineer',
  description: 'Senior Software Engineer — zk systems, DeFi, smart contracts. Based in Florianópolis, Brazil.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif&family=EB+Garamond:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <ThemeInit />
      </head>
      <body>
        {children}
        <AnimatedBackground />
        <ThemeToggle />
      </body>
    </html>
  );
}
