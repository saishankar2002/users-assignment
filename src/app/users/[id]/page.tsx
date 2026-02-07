'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/usersApi';
import { useParams } from 'next/navigation';

export default function UserDetails() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Error loading user</p>;
  if (!data) return <p>User not found</p>;

  return (
  <div className="details-page">
    <div className="navbar">
      <h2>User Details</h2>
    </div>

    <div className="content">
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>City: {data.address.city}</p>
    </div>
  </div>
);

}
