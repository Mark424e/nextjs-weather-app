"use client";

import SearchBar from "@/components/SearchBar";

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="w-full">
      <div className="grid grid-cols-3 justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Weather App</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
