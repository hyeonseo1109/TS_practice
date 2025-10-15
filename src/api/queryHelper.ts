import {
  useMutation,
  useQuery,
  useQueryClient,
  type QueryKey,
  type UseQueryOptions,
} from "@tanstack/react-query";

// useQuery를 간소화해주는 래퍼.
export function useSimpleQuery<T = unknown, TError = Error>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>,
  options?: Omit<UseQueryOptions<T, TError>, "queryKey" | "queryFn">
  // useQuery로 가져올 수 있는 Query 속성들 중 이미 있는 data와 error를 제외한 나머지 속성들을 optional하게 가져옴.
) {
  return useQuery<T, TError>({
    queryKey,
    queryFn,
    ...options,
  });
}

export function useSimpleMutation<
  T = unknown,
  TError = Error,
  TVariables = void
  // TVariables: path/query parameter나 payload 보내는 매개변수.
  // 따로 작성하지 않을 시 반환값 없는 void.
>(
  mutationFn: (variables: TVariables) => Promise<T>,
  options?: {
    invalidateKeys?: string[];
    onSuccess?: (data: T, variables: TVariables) => void;
    onError?: (error: TError) => void;
  }
) {
  const queryClient = useQueryClient();
  const { invalidateKeys = [], ...mutationOptions } = options || {};

  return useMutation<T, TError, TVariables>({
    mutationFn,
    onSuccess: (data, variables) => {
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
      });

      mutationOptions.onSuccess?.(data, variables);
    },
    onError: mutationOptions.onError,
  });
}
