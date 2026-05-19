export default function Page() {
  const hue = Math.floor(Math.random() * 360);
  const accentHue = (hue + 60) % 360;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem",
        background: `linear-gradient(135deg, hsl(${hue} 80% 92%), hsl(${accentHue} 85% 84%))`,
        color: `hsl(${hue} 60% 18%)`
      }}
    >
      <h1>Homepage</h1>
      <p>Welcome to Anastasia&apos;s website.</p>
    </main>
  );
}
