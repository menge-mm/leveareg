import { useContext, createContext, useState, useRef } from "react";
import SearchModal from "./modal";
import Search from "./search";
import { usePathname } from "next/navigation";
import { healthInfo, pageSearch } from "@/constants/search";
import { filterHealthInfo, searchPages } from "./actions";

const getSearchData = (pathname: string) => {
  switch (pathname) {
    case "/information":
      return { cb: filterHealthInfo, data: healthInfo };
    default:
      return { cb: filterHealthInfo, data: healthInfo };
  }
};

type SearchContextType<T> = {
  search: string;
  setSearch: (text: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  searchResult: T[];
  setSearchResult: (result: T[]) => void;
  ai: boolean;
  setAi: (value: boolean) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }) => void;
};

export const SearchContext = createContext<SearchContextType<any>>({
  search: "",
  setSearch: () => {},
  open: false,
  setOpen: () => {},
  searchResult: [],
  setSearchResult: () => {},
  ai: false,
  setAi: () => {},
  handleSearch: () => {},
});

export const useSearch = () => {
  return useContext(SearchContext);
};

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [ai, setAi] = useState(false);

  const handleSearch = <T,>(
    e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }
  ) => {
    setSearch(e.target.value);
    const { cb, data } = getSearchData(pathname as string);
    const result = cb(e.target.value, data);

    setSearchResult(result);
  };
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        open,
        setOpen,
        searchResult,
        setSearchResult,
        ai,
        setAi,
        handleSearch,
      }}
    >
      {children}
      <SearchModal>
        <Search />
      </SearchModal>
    </SearchContext.Provider>
  );
};

export default SearchProvider;
