import { Input } from '@/components/atoms/input';
import { useSearch } from '@/contexts/search';
import { DotIcon, SearchIcon, TextCursor, TextCursorInput } from 'lucide-react';
import { useEffect } from 'react';

const Search = () => {
  const { setOpen } = useSearch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
        setOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setOpen]);
  return (
    <div
      className="flex border-2 w-auto border-gray-300 hover:border-primary py-2 rounded-full items-center justify-between px-6 transition-colors duration-300 gap-10 md:gap-20 min-w-[280px] mr-3 cursor-pointer"
      onClickCapture={(e) => setOpen(true)}
    >
      <div className="text-xl flex items-center gap-3">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        Search...
      </div>
      <div className="hidden sm:flex items-center gap-1 text-muted-foreground">
        <span className="rounded-lg border border-gray-300 px-2 py-[2px] text-sm">Ctrl</span>+
        <span className="rounded-lg border border-gray-300 px-2 py-[2px] text-sm">K</span>
      </div>
    </div>
  );
};

export default Search;
