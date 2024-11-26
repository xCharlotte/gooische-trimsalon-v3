import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { Search as SearchIcon } from "lucide-react";

export default function Search({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 300),
    []
  );

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex justify-end px-5">
      <div className="border rounded-lg px-4 py-1 w-2/6">
        <div className="flex flex-row items-center">
          <SearchIcon className="h-5 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Zoeken..."
            className="border-none text-sm w-full focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
}
