export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
          Capture Feed
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Your private stream of thoughts, ideas, tasks, reminders, links, and
          notes will live here.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <p className="text-neutral-300">
            Dashboard page is connected. Thought capture comes in a later stage.
        </p>
      </div>
    </section>
  );
}
