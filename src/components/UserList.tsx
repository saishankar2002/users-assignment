'use client';

import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/usersApi';
import UserItem from './UserItem';
import { useState } from 'react';

export default function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const [search, setSearch] = useState('');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const filteredUsers = data?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />

      {filteredUsers?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
