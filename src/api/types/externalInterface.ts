export type NewsCategory =
  | "politics"
  | "economy"
  | "society"
  | "culture"
  | "sports";

export interface NewsItem {
  title: string;
  link: string;
  source: string;
}

export interface Weather {
  city: string;
  current_temp: number;
  max_temp: number;
  min_temp: number;
  humidity: number;
  precipitation: number;
  pm10: number;
  weather_icon: string;
  description: string;
}
