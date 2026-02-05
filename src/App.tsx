import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import type { GithubUser } from "./types";

/**
 * Main Application Component

 *
 * Manages the core application state including user data, loading status,
 * error handling, and search history.
 */
function App() {
  // State for storing the current user data
  const [user, setUser] = useState<GithubUser | null>(null);

  // State for loading indicator
  const [loading, setLoading] = useState(false);

  // State for error handling
  const [error, setError] = useState<Error | null>(null);

  // State for persisting search history, initialized from localStorage
  const [history, setHistory] = useState<GithubUser[]>(() => {
    const saved = localStorage.getItem("githubHistory");
    return saved ? JSON.parse(saved) : [];
  });

  /**
   * Fetches user data from the GitHub API.
   * Updates the user state and history upon success.
   * Handles loading and error states.
   *
   * @param username - The GitHub username to search for.
   */
  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("User not found");
      }
      setUser(data);
      setUser(data);

      // Update history: remove duplicate if exists, add new user to top, keep only last 5
      setHistory((prevHistory) => {
        const filteredHistory = prevHistory.filter(
          (item) => item.id !== data.id,
        );
        return [data, ...filteredHistory].slice(0, 5);
      });
    } catch (error) {
      setError(error as Error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Persist history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("githubHistory", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <p className="text-2xl font-bold text-center m-10">GitHub Hunter</p>
      <SearchBar fetchUser={fetchUser} />
      <UserCard user={user} loading={loading} error={error} />
    </>
  );
}

export default App;
