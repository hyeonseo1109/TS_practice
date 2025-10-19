import { useSimpleMutation, useSimpleQuery } from "../queryHelper";
import type {
  UpdateProfilePayload,
  User,
  UserLocation,
} from "../types/userInterface";
import { apiClient } from "./client";

const MY_PROFILE = "myProfile";
const MY_LOCATION = "myLocation";

// 프로필 조회
export const useGetMyProfile = () =>
  useSimpleQuery<User>([MY_PROFILE], () => apiClient.get<User>("/users/me"), {
    staleTime: 1000 * 60 * 5,
  });

// 프로필 수정
export const useUpdateMyProfile = () =>
  useSimpleMutation(
    (payload: UpdateProfilePayload) =>
      apiClient.patch<User>("/users/me", payload),
    { invalidateKeys: [MY_PROFILE] }
  );

// 계정 삭제
export const useDeleteMyAccount = () =>
  useSimpleMutation(() => apiClient.delete("/users/me"));

// 위치 업데이트
export const useUpdateMyLocation = () =>
  useSimpleMutation(
    (payload: UserLocation) =>
      apiClient.patch<UserLocation>("/users-locations/", payload),
    { invalidateKeys: [MY_LOCATION] }
  );
