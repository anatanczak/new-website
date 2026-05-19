export const metadata = {
  title: "Anastasia Website",
  description: "Personal website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>{" "}
            <a href="/biography">Biography</a>{" "}
            <a href="/apps">Apps</a>{" "}
            <a href="/portfolio">Portfolio</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
