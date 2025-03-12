import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md lg:max-w-[400px] flex items-center"
    >
      <label className="w-full">
        <FiSearch
          className="absolute  left-4 top-1/2 transform -translate-y-1/2 text-primary"
          size={20}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Търсене..."
          className="w-full bg-white border  text-black dark:text-gray-100 rounded-3xl py-3 pl-12 pr-4 focus:outline-none focus:ring-0 focus:border-primary"
        />
      </label>
      {query && (
        <button
          type="submit"
          className="ml-3 tracking-wide text-sm hover:text-primary hover:scale-105 text-primary absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          Търсене
        </button>
      )}
    </form>
  );
};

export default SearchBar;
