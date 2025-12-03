import { Data } from "../types";

interface CodingOverviewProps {
  totalHours: string;
  topLanguages: Data[];
}

export default function CodingOverview({
  totalHours,
  topLanguages,
}: CodingOverviewProps) {
  function getLanguageIcon(lang: string, props = {}) {
    if (!lang) return null;

    const name = lang.toLowerCase();

    const cls = `devicon-${name}-plain colored`;

    return <i className={cls} {...props} />;
  }

  return (
    <div className="col-span-2 p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Coding Overview</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">{totalHours} hrs</p>
          <p className="text-sm text-slate-500">in the tracked period</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Top language</p>
          <p className="font-medium">{topLanguages[0]?.name || "—"}</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {topLanguages.slice(0, 14).map((lang) => (
          <div key={lang.name} className="p-3 bg-slate-50 rounded-lg">
            {getLanguageIcon(lang.name, { style: { fontSize: 48 } })}
            <p className="text-sm text-slate-500">{lang.name}</p>
            <p className="font-semibold">
              {(lang.total_seconds / 3600).toFixed(1)} hrs
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
