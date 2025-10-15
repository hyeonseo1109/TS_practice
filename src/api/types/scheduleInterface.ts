export interface Schedule {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateSchedulePayload {
  title: string;
  start_time: string;
  end_time: string;
  description?: string;
}

export interface UpdateSchedulePayload {
  title?: string;
  start_time?: string;
  end_time?: string;
  description?: string;
}
