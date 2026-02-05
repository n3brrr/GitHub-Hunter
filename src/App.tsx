import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

function App() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [history, setHistory] = useState<GithubUser[]>(() => {
    const saved = localStorage.getItem("githubHistory");
    return saved ? JSON.parse(saved) : [];
  });

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
