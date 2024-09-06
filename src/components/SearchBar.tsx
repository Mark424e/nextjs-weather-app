import { useState } from "react";
import Image from "next/image";

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
          className="focus:outline-none bg-card rounded-full ps-12 p-3 text-text text-sm w-full"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button type="submit" className="absolute left-4">
          <Image
            src="/assets/search.svg"
            alt="Search Icon"
            width={18}
            height={18}
          />
        </button>
      </form>

      {loading && <p>Loading...</p>}
    </div>
  );
}
