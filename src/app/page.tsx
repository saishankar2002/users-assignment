import UserList from '@/components/UserList';

export default function Home() {
  return (
    <div className="home-page">
      <div className="navbar">
        <h2>User List</h2>
      </div>

      <div className="content">
        <UserList />
      </div>
    </div>
  );
}
