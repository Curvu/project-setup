import { useState, useCallback } from 'react';

export const useRequest = (requestFunc, options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const doRequest = useCallback(
    (params) => {
      setError(null);

      requestFunc(params)
        .then(({ data }) => {
          setData(data);
          options?.onSuccess?.(data);
        })
        .catch((error) => {
          setData(null);
          setError(error);
          options?.onError?.(error);
        })
        .finally(() => setLoading(false));
    },
    [requestFunc, options],
  );

  return {
    doRequest,
    data,
    isLoading,
    error,
  };
};
