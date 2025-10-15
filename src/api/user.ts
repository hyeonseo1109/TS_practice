// import type { User } from "../type";
import { api } from "./client";
import { useSimpleMutation, useSimpleQuery } from "./queryHelper";
import type {
  UpdateProfilePayload,
  User,
  UserLocation,
} from "./types/userInterface";

const MY_PROFILE = "myProfile";
const MY_LOCATION = "myLocation";

// 프로필 조회
export const getMyProfile = () => api.get("/users/me") as Promise<User>;
// client에서 인터셉터로 response.data를 반환했으나
// 인터셉터의 타입 변환을 추적하지 못하는 문제 발생
// => api.get()의 반환 타입이 여전히 <AxiosResponse<unknown>>로 인식되고 getMyProfile을 타입으로 쓸 수 없다고 뜸.

// 이때, 헬퍼에서 보면 () => Promise<T> 타입이어야 되는데
// 타입은 아래 useSimpleQuery<User>로 지정하지만
// ()의 타입이 getMyProfile 타입이어야 되는데, 얘가 User로 인식 못 하니까 오류 나는 거.

// => 타입 단언으로 해결
// ! GET 요청에서 데이터를 반환받을 때, POST/PATCH/PUT 요청에서 응답 데이터를 사용할 때 타입을 지정해주면 됨
// ? POST/PATCH 요청에서 응답을 무시할 때, DELETE 요청에서 응답 데이터 안 쓸 때 등, 데이터를 직접 쓰지 않을 때는 타입 지정 안 해줘도 됨.
export const useGetMyProfile = () =>
  useSimpleQuery<User>([MY_PROFILE], getMyProfile, {
    staleTime: 1000 * 60 * 5,
  });

// - - - - - - - - - - - - - - - - - -

// 프로필 수정
export const updateMyProfile = (payload: UpdateProfilePayload) =>
  api.patch("/users/me", payload) as Promise<User>;
export const useUpdateMyProfile = () =>
  useSimpleMutation(updateMyProfile, {
    invalidateKeys: [MY_PROFILE],
  });

// - - - - - - - - - - - - - - - - - -

// 계정 삭제
export const deleteMyAccount = () => api.delete("/users/me");
export const useDeleteMyAccount = () => useSimpleMutation(deleteMyAccount);

// - - - - - - - - - - - - - - - - - -

// 위치 업데이트
export const updateMyLocation = (payload: UserLocation) =>
  api.patch("/users-locations/", payload) as Promise<UserLocation>;
export const useUpdateMyLocation = () =>
  useSimpleMutation(updateMyLocation, {
    invalidateKeys: [MY_LOCATION],
  });
