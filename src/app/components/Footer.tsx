import Link from "next/link";
import { User } from "../types";
import { Github, Linkedin, Twitter } from "lucide-react";

interface HeaderProps {
  user: User;
}

export default function Footer({ user }: HeaderProps) {
  return (
    <footer className="text-xs text-slate-400">
      <div className="flex gap-3">
        {user.data.github_username && (
          <Link
            className="flex items-center mt-3 text-slate-700 text-sm hover:underline"
            href={`https://github.com/${user.data.github_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            <span className="ml-2 truncate">{user.data.github_username}</span>
          </Link>
        )}
        {user.data.linkedin_username && (
          <Link
            className="flex items-center mt-3 text-slate-700 text-sm hover:underline"
            href={`https://linkedin.com/in/${user.data.linkedin_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            <span className="ml-2 truncate">{user.data.linkedin_username}</span>
          </Link>
        )}
        {user.data.twitter_username && (
          <Link
            className="flex items-center mt-3 text-slate-700 text-sm hover:underline"
            href={`https://twitter.com/${user.data.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4" />
            <span className="ml-2 truncate">{user.data.twitter_username}</span>
          </Link>
        )}
      </div>

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
