export interface User {
  data: {
    photo: string;
    display_name: string;
    email: string;
    bio: string;
    website: string;
    github_username: string;
    twitter_username: string;
    wonderfuldev_username: string;
    linkedin_username: string;
    public_profile_time_range: string;
    city: { title: string };
  };
}

export interface Data {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
}

export interface Stat {
  data: {
    daily_average: number;
    daily_average_including_other_language: number;
    projects: Data[];
    editors: Data[];
    operating_systems: Data[];
    languages: Data[];
    categories: Data[];
    machines: Data[];
    total_seconds: number;
    best_day: {
      date: string;
      text: string;
      total_seconds: number;
    };
  };
}
