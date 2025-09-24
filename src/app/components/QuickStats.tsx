import { Stat } from "../types";

interface QuickStatsProps {
  stats: Stat;
}

export default function QuickStat({ stats }: QuickStatsProps) {
  return (
    <aside className="p-6 bg-white rounded-2xl shadow-sm space-y-6">

      <div>
        <h3 className="text-lg font-semibold mb-3">Quick stats</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span className="text-slate-500">Projects</span>
            <span className="font-medium">
              {stats.data.projects.length ?? 0}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="text-slate-500">Editors</span>
            <span className="font-medium truncate ml-2">
              {stats.data.editors.map((e) => e.name).join(", ") || "—"}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="text-slate-500">Operating systems</span>
            <span className="font-medium truncate ml-2">
              {stats.data.operating_systems
                .map((os) => os.name)
                .join(", ") || "—"}
            </span>
          </li>
        </ul>
      </div>

      <hr className="border-slate-200" />

      <div>
        <h3 className="text-lg font-semibold mb-2">Best day</h3>
        <p className="text-sm text-slate-500">{stats.data.best_day.date}</p>
        <p className="text-2xl font-bold mt-1">
          {(stats.data.best_day.total_seconds / 3600).toFixed(1)} hrs
        </p>
      </div>

      <hr className="border-slate-200" />

      <div>
        <h3 className="text-lg font-semibold mb-2">Daily average</h3>
        <p className="text-2xl font-bold">
          {(stats.data.daily_average_including_other_language / 3600).toFixed(
            1
          )}{" "}
          hrs
        </p>
        <p className="text-sm text-slate-500">per day</p>
      </div>
    </aside>
  );
}
