import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          className="focus:outline-none border border-gray-300 rounded-md px-4 py-2 text-black"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
    </div>
  );
}
