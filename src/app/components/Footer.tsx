import { User } from "../types";

interface HeaderProps {
  user: User;
}

export default function Footer({ user }: HeaderProps) {
  return (
    <footer className="text-xs text-slate-400">
      <p className=" mt-4">
        © {new Date().getFullYear()} {user.data.display_name}. All rights
        reserved.
      </p>
      <p className="mt-1">
        Coding activity data powered by{" "}
        <a
          href="https://wakatime.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-600"
        >
          WakaTime
        </a>
        .
      </p>
    </footer>
  );
}
