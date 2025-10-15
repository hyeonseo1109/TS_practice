export type NewsCategory =
  // union값은 type만 가능하고 interface는 불가능함.
  // 객체 구조는 interface로, 그 외의 union / tuple은 type으로 많이 한다고 함.
  "politics" | "economy" | "society" | "culture" | "sports";

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

export interface QuizData {
  id: number;
  question: string | null;
  options: string[];
  answer: string | null;
}

export interface QuizResponse {
  success: boolean;
  data: QuizData;
}
