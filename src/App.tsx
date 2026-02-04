import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <p className="text-2xl font-bold text-center bg-red-500">GitHub Hunter</p>
      <SearchBar />
      <UserCard />
    </>
  );
}

export default App;
