import { useState } from "react";

/**
 * SearchBar Component
 *
 * Provides an input field and button for users to search for GitHub profiles.
 *
 * @param fetchUser - Function to call with the search query when submitted.
 */
export default function SearchBar({
  fetchUser,
}: {
  fetchUser: (username: string) => void;
}) {
  const [username, setUsername] = useState("");

  /**
   * Handles the form submission.
   * Trims whitespace and calls the fetchUser prop if the input is not empty.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    if (trimmedUsername) fetchUser(trimmedUsername);
    setUsername("");
  };

  return (
    <div className="flex justify-center gap-4">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search nickname..."
          className="max-w-xl  border-blue-500 rounded-lg m-3 p-3 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-linear-to-r from-blue-900 to-blue-400 hover:scale-110 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded p-5 max-w-xs "
        >
          Search
        </button>
      </form>
    </div>
  );
}
