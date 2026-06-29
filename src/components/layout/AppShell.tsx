import { NavLink, Outlet } from "react-router";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Archive", path: "/archive" },
  { label: "Tags", path: "/tags" },
  { label: "Settings", path: "/settings" },
];

export default function AppShell() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 broder-r border-neutral-800 bg-neutral-950 p-6 lg:block">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Mind
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight">
            Mind<span className="text-cyan-300">//</span>VAULT
          </h1>
        </div>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "block rounded-xl border px-4 py-3 text-sm font-bold transition",
                  isActive
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-200"
                    : "border-transparent text-neutral-400 hover:border-neutral-800 hover:bg-neutral-900 hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/85 px-6 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
              Private Dashboard
            </p>

            <p className="rounded-full border border-neutral-800 px-3 py-1 text-xs font-bold text-neutral-400">
              Local First
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
