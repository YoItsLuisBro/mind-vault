export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Private Brain Vault
        </p>

        <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
          MIND<span className="text-cyan-300">//</span>VAULT
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Capture thoughts, ideas, links, reminders, notes, and tasks in one
          searchable private dashboard.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Setup complete
          </p>
          <p className="mt-3 text-neutral-300">
            React, Vite, TypeScript, and TailwindCSS are ready.
          </p>
        </div>
      </section>
    </main>
  );
}


