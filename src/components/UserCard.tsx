import Loading from "./Loading";
import type { GithubUser } from "../types";

interface UserCardProps {
  user: GithubUser | null;
  loading: boolean;
  error: Error | null;
}

/**
 * UserCard Component
 *
 * Displays the GitHub user's profile information.
 * Handles loading, error, and empty states.
 *
 * @param user - The user data object.
 * @param loading - Boolean indicating if data is being fetched.
 * @param error - Error object if the fetch failed.
 */
export default function UserCard({ user, loading, error }: UserCardProps) {
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (user === null) return <p className="text-center mt-5">Ready to Hunt?</p>;

  return (
    <div className="shadow-lg rounded-lg p-4 border-2 border-gray-200 flex flex-col items-center max-w-lg mx-auto m-15 bg-[#0b4191] bg-linear-to-b from-[#143461] to-[#0b4191] text-[#c9d1d9]">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="w-32 h-32 rounded-full"
      />
      <p className="text-lg font-bold text-white">{user.name || user.login}</p>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-white font-semibold">
          {user.location && `Location: ${user.location}`}
        </p>
        <p className="text-white font-semibold">
          {user.company && `Company: ${user.company}`}
        </p>
        <p className="text-white font-semibold">
          {user.blog && `Blog: ${user.blog}`}
        </p>
        <p className="text-white font-semibold">
          {user.email && `Email: ${user.email}`}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 justify-center items-center text-center">
        <p className="text-white bg-blue-500/20 rounded-lg p-3">
          Followers
          <div className="text-lg font-bold text-center text-blue-300 m-2">
            {user.followers > 1000 ? (
              <div className="text-yellow-300">{user.followers}</div>
            ) : (
              user.followers
            )}
          </div>
        </p>
        <p className="text-white bg-blue-500/20 rounded-lg p-3">
          Following
          <div className="text-lg font-bold text-center text-blue-300 m-2">
            {user.following}
          </div>
        </p>
        <p className="text-white bg-blue-500/20 rounded-lg p-3">
          Public Repos
          <div className="text-lg font-bold text-center text-blue-300 m-2">
            {user.public_repos}
          </div>
        </p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 text-white bg-linear-to-r from-blue-400 to-blue-500 hover:scale-110 transition-all duration-200 ease-in-out p-2 rounded-lg border-2 border-blue-300 hover:shadow-lg hover:shadow-blue-500"
      >
        View Profile
      </a>
    </div>
  );
}
