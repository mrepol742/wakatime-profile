import Header from "./components/Header";
import CodingOverview from "./components/CodingOverView";
import { User, Stat } from "./types";
import QuickStat from "./components/QuickStats";
import Footer from "./components/Footer";
import "devicon/devicon.min.css";

async function getData() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return { user: null, stats: null };

  const userRes = await fetch(
    `https://wakatime.com/api/v1/users/current?api_key=${apiKey}`,
    { next: { revalidate: 10800 } }, // 3 hours
  );

  const statsRes = await fetch(
    `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${apiKey}`,
    { next: { revalidate: 10800 } },
  );

  if (!userRes.ok) {
    throw new Error(
      `User fetch failed: ${userRes.status} - ${await userRes.text()}`,
    );
  }
  if (!statsRes.ok) {
    throw new Error(
      `Stats fetch failed: ${statsRes.status} - ${await statsRes.text()}`,
    );
  }

  return {
    user: (await userRes.json()) as User,
    stats: (await statsRes.json()) as Stat,
  };
}

export default async function Home() {
  const { user, stats } = await getData();

  if (!user)
    return "User not found. Make sure the API Key is valid and the user exists.";

  const topLanguages = stats?.data?.languages ?? [];
  const totalSeconds = stats?.data?.total_seconds ?? 0;
  const totalHours = (totalSeconds / 3600).toFixed(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="max-w-4xl mx-auto p-8">
        <Header user={user} />

        <hr className="my-8" />

        <section id="stats" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CodingOverview totalHours={totalHours} topLanguages={topLanguages} />
          <QuickStat stats={stats} />
        </section>

        <Footer user={user} />
      </section>
    </main>
  );
}
