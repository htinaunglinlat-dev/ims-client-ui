const stats = [
  { value: "50+", label: "Screens Designed" },
  { value: "5", label: "Main Features" },
  { value: "100%", label: "Mobile Optimized" },
  { value: "3", label: "Design Iterations" },
];

export function ProjectDetailOverview() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-8 text-sm font-extrabold uppercase tracking-widest text-cyan-400">
            Overview
          </p>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Reimagining inventory control
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            I designed a comprehensive inventory management system that empowers
            businesses to track stock levels, manage shipments, communicate with
            team members, and receive real-time notifications all in one
            intuitive mobile application.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-h-32 rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="text-4xl font-extrabold tracking-wide text-cyan-600 dark:text-cyan-300">
                {stat.value}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
