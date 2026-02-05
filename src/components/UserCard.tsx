import Loading from "./Loading";

export default function UserCard({ user, loading, error }: any) {
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.location}</p>
      <p>{user.company}</p>
      <p>{user.blog}</p>
      <p>{user.email}</p>
      <p>{user.public_repos}</p>
      <p>{user.public_gists}</p>
      <p>{user.followers}</p>
      <p>{user.following}</p>
      <p>{user.created_at}</p>
      <p>{user.updated_at}</p>
    </div>
  );
}
