const apps = [
  { slug: "app1", name: "App 1" },
  { slug: "app2", name: "App 2" }
];

export const metadata = {
  title: "Apps | Anastasia Website",
  description: "Applications overview"
};

export default function AppsPage() {
  return (
    <main>
      <h1>Apps</h1>
      <ul>
        {apps.map((app) => (
          <li key={app.slug}>
            <a href={`/apps/${app.slug}`}>{app.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
