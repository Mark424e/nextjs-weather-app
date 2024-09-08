"use client";

import SearchBar from "@/components/SearchBar";

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="w-full fixed bg-background px-10 py-6 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center">
        <h1 className="hidden md:block text-white text-2xl font-bold">Weather App</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
