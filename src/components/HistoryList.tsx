import type { GithubUser } from "../types";

export default function HistoryList({
  history,
  setHistory,
  onSelectUser,
}: {
  history: GithubUser[];
  setHistory: (history: GithubUser[]) => void;
  onSelectUser: (username: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 mt-10 border-t-2 border-gray-200 pt-10 justify-center max-w-lg mx-auto">
      {history.length === 0 && (
        <p className="text-center text-gray-500">
          Search user to add to history
        </p>
      )}
      <h2 className="text-2xl font-bold">History</h2>
      {history.map((user) => (
        <div
          key={user.id}
          onClick={() => onSelectUser(user.login)}
          className="flex items-center gap-4 p-2 hover:mb-4 hover:shadow-lg hover:shadow-blue-500/80 hover:scale-105 transition-all duration-300 rounded-xl"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-10 h-10 rounded-full"
          />
          <p className="cursor-pointer hover:text-blue-500 transition-all duration-300">
            {user.login}
          </p>
        </div>
      ))}
      {history.length > 0 && (
        <button
          onClick={() => {
            setHistory([]);
          }}
          className="bg-linear-to-r from-blue-900 to-blue-400 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
        >
          Clear History
        </button>
      )}
    </div>
  );
}
