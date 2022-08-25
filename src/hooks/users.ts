import axios from 'axios';
import { useState } from 'react';

export interface User {
  id: number;
  score: number;
  site_admin: boolean;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface UsersGetData {
  items: User[];
  total_count: number;
  incomplete_results: boolean;
}

export interface UseUsersGet {
  fetch: (name?: string) => void;
  data: User[];
  loading: boolean;
  error: string;
  clearError: () => void;
}

export const useUsersGet = (): UseUsersGet => {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = (name?: string) => {
    if (name) {
      setLoading(true);

      axios.get<UsersGetData>(`https://api.github.com/search/users?q=${name}+in:login`)
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
