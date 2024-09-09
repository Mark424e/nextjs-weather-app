import { useState, useRef, useEffect, RefCallback } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setSelectedIndex(null);
    setErrorMessage(null);
  }, [suggestions]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);

    if (e.target.value.length > 2) {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/find?q=${e.target.value}&type=like&sort=population&appid=${API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data.list);
        setErrorMessage(null); // Clear any existing error message
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== "") {
      if (
        suggestions.some(
          (suggestion) => suggestion.name.toLowerCase() === city.toLowerCase()
        )
      ) {
        onSearch(city);
        setCity("");
        setSuggestions([]);
        setErrorMessage(null); // Clear any existing error message
      } else {
        setErrorMessage(`"${city}" doesn't exist`);
      }
    }
  };

  const handleSuggestionClick = (cityName: string) => {
    setCity(cityName);
    setSuggestions([]);
    onSearch(cityName);
    setErrorMessage(null); // Clear any existing error message
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(prevIndex + 1, suggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? suggestions.length - 1 : Math.max(prevIndex - 1, 0)
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex !== null) {
        handleSuggestionClick(suggestions[selectedIndex].name);
      } else if (city.trim() !== "" && suggestions.length > 0) {
        // Create a dummy FormEvent
        handleSubmit({
          preventDefault: () => {},
          currentTarget: null,
        } as unknown as React.FormEvent);
      } else {
        setErrorMessage(`"${city}" doesn't exist`);
      }
    }
  };

  useEffect(() => {
    if (selectedIndex !== null && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  // Callback ref to handle type compatibility
  const setRef: RefCallback<HTMLLIElement> = (el) => {
    if (el) {
      suggestionRefs.current.push(el);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4"
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          className={`focus:outline-none border bg-card text-foreground ps-12 p-3 text-text text-sm w-full 
            ${suggestions.length > 0 ? "rounded-t-3xl" : "rounded-full"}`}
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button type="submit" className="absolute left-4">
          <Search className="h-[1.2rem] w-[1.2rem]" size="icon" />
        </button>
        {loading && (
          <div className="absolute right-4">
            <div className="loader"></div>
          </div>
        )}
      </form>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}

      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-card shadow-lg border border-t-0 z-50 text-sm rounded-b-3xl">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              ref={setRef}
              className={`p-4 cursor-pointer hover:bg-accent ${
                index === selectedIndex ? "bg-accent" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}, {suggestion.sys.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
