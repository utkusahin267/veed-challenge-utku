import { useEffect, useState } from 'react'

interface State<T> {
  data?: T;
  error?: Error;
  loading?: boolean;
}

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const [state, setState] = useState<State<T>>({
    error: undefined,
    data: undefined,
    loading: undefined,
  });

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setState({ loading: true })
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T;

        setState({ data, loading: false })
      } catch (error) {
        setState({ error: error as Error, data: undefined, loading: false })
      }
    }

    void fetchData();

  }, [url, options])

  return state;
}

export default useFetch