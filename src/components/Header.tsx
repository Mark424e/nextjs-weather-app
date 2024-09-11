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
    <header>
      <div className="flex md:grid md:grid-cols-3 justify-between items-center gap-8 md:gap-0">
        <div className="hidden md:block">
          <h1
            onClick={handleRefresh}
            className="text-2xl font-bold cursor-pointer w-fit"
          >Weather App</h1>
        </div>
        <div className="flex-1">
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
