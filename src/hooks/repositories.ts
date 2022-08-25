import { useState } from 'react';
import axios from 'axios';

export interface Repository {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
}

interface RepositoriesGetIdData {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

interface UseRepositoriesGetId {
  fetch: (name?: string) => void;
  data: Repository[];
  loading: boolean;
  error: string;
  clearError: () => void;
}

export const useRepositoriesGetId = ():UseRepositoriesGetId => {
  const [data, setData] = useState<Repository[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = (name?: string) => {
    if (name) {
      setLoading(true);

      axios.get<RepositoriesGetIdData>(`https://api.github.com/search/repositories?q=${name}+in:name`)
        .then((res) => setData(res.data.items))
        .catch((res) => setError(res?.data?.message || 'Something went wrong!'))
        .finally(() => setLoading(false));
    } else {
      setData([]);
    }
  };

  const clearError = () => setError('');

  return { fetch, data, loading, error, clearError };
};
