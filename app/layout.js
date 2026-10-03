import SiteNavigation from '../components/navigation/SiteNavigation';
import '../styles/globals.scss';

export const metadata = {
  title: "Anastasia Website",
  description: "Personal website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
