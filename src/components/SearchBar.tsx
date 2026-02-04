export default function SearchBar() {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search nickname..."
        className="max-w-xs hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button className="bg-blue-500 hover:bg-blue-600 hover:scale-110 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}
