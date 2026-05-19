const apps = {
  app1: {
    title: "App 1",
    description: "Details for App 1."
  },
  app2: {
    title: "App 2",
    description: "Details for App 2."
  }
};

export function generateMetadata({ params }) {
  const app = apps[params.slug];

  return {
    title: `${app?.title ?? "App"} | Anastasia Website`,
    description: app?.description ?? "Application page"
  };
}

export default function AppDetailPage({ params }) {
  const app = apps[params.slug];

  if (!app) {
    return (
      <main>
        <h1>App not found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{app.title}</h1>
      <p>{app.description}</p>
    </main>
  );
}
