import Loading from "./Loading";
import type { GithubUser } from "../types";

export default function UserCard({ user, loading, error }: GithubUser) {
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (user === null) return <p className="text-center mt-5">Ready to Hunt?</p>;

  return (
    <div className="shadow-lg rounded-lg p-4 border-2 border-gray-200 flex flex-col items-center">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="w-32 h-32 rounded-full"
      />
      <p className="text-lg font-bold text-white">{user.name || user.login}</p>
      <p className="text-white">
        {user.location && `Location: ${user.location}`}
      </p>
      <p className="text-white">{user.company && `Company: ${user.company}`}</p>
      <p className="text-white">{user.blog && `Blog: ${user.blog}`}</p>
      <p className="text-white">{user.email && `Email: ${user.email}`}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 p-2 rounded-lg mt-2"
      >
        View Profile
      </a>
    </div>
  );
}
