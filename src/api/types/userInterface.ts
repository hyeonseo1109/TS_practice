export interface User {
  id: number;
  email: string;
  username: string;
  profile_image?: string;
  is_active: boolean;
  is_admin: boolean;
  created_at: string;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  location_name?: string;
}

export interface UpdateProfilePayload {
  username?: string;
  email?: string;
  profile_image?: string;
}
