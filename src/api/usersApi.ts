import { User } from '@/models/user';

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}
