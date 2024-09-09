"use client";

import SearchBar from "@/components/SearchBar";
import ModeToggle from "@/components/LightDark";

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleRefresh = () => {
    window.location.reload(); // Refreshes the page
  };

  return (
    <header className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center">
        <div>
          <h1
            onClick={handleRefresh}
            className="hidden md:block text-2xl font-bold cursor-pointer w-fit"
          >
            Weather App
          </h1>
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="grid justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
