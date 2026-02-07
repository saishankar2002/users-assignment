import { User } from '@/models/user';
import Link from 'next/link';

export default function UserItem({ user }: { user: User }) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="user-item">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
      </div>
    </Link>
  );
}
