import Image from "next/image";
import { User } from "../types";
import { LinkIcon, MapPin } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex flex-col items-center text-center gap-4 md:flex-row md:items-center md:text-left md:gap-6">
      <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-slate-200 shrink-0">
        <Image
          src={user.data.photo || "/favicon.ico"}
          alt={user.data.display_name || "Profile"}
          width={112}
          height={112}
          className="object-cover rounded-full"
        />
      </div>

      <div>
        <h1 className="text-3xl font-extrabold">
          {user.data.display_name || "Anonymous"}
        </h1>
        <p className="text-sm text-slate-500 mt-1">{user.data.email || ""}</p>
        <p className="mt-3 text-slate-700">
          {user.data.bio ||
            "Full-stack developer • Open-source • Coffee enthusiast"}
        </p>

        <div className="flex items-center mt-3 text-slate-700 text-sm">
          <MapPin className="w-4 h-4" />
          <span className="ml-2">{user.data.city.title}</span>
        </div>

        <Link
          className="flex items-center mt-3 text-slate-700 text-sm hover:underline"
          href={user.data.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon className="w-4 h-4" />
          <span className="ml-2 truncate">{user.data.website}</span>
        </Link>
      </div>
    </header>
  );
}
