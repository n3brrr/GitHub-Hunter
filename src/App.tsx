import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import HistoryList from "./components/HistoryList";
import useGithub from "./hooks/useGithub";

/**
 * Main Application Component

 *
 * Manages the core application state including user data, loading status,
 * error handling, and search history.
 */
function App() {
  const { user, loading, error, history, fetchUser, setHistory } = useGithub();
  return (
    <>
      <p className="text-2xl font-bold text-center m-10">GitHub Hunter</p>
      <SearchBar fetchUser={fetchUser} />
      <UserCard user={user} loading={loading} error={error} />
      <HistoryList
        history={history}
        setHistory={setHistory}
        onSelectUser={fetchUser}
      />
    </>
  );
}

export default App;
