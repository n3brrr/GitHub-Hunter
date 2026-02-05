import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
    } catch (error) {
      setError(error as Error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="text-2xl font-bold text-center m-10">GitHub Hunter</p>
      <SearchBar fetchUser={fetchUser} />
      <UserCard user={user} loading={loading} error={error} />
    </>
  );
}

export default App;
