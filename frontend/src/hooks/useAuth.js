import { useQuery } from 'react-query';

async function fetchFunction() {
  const res = await fetch('/api/auth', {
    credentials: 'include',
  });

  const data = await res.json();
  console.log('From useAuth', data);
  return data;
}

export default function useAuth() {
  return useQuery(['auth'], fetchFunction);
}
