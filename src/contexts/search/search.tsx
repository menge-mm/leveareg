import { SearchIcon, X, XIcon } from 'lucide-react';
import SearchBarHeader from './header';
import SearchBarFooter from './footer';
import { motion, useScroll } from 'framer-motion';
import clsx from 'clsx';
import SearchAI from './search-ai';
import SearchResultApp from './search-app';
import { filterHealthInfo } from './actions';
import { useSearch } from '.';
import { useEffect, useRef } from 'react';
import useLockScroll from '@/hooks/useLockScroll';

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { ai, setAi, open, setOpen, search, setSearch, handleSearch } = useSearch();
  const { lockScroll, unlockScroll } = useLockScroll();

  useEffect(() => {
    if (open) {
      ref.current?.focus();
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          setSearch('');
        }
      });
    }
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          setSearch('');
        }
      });
    };
  }, [open, setOpen, setSearch, lockScroll, unlockScroll]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        'relative flex flex-col w-[90%] md:w-[640px] xl:w-[920px] rounded-lg h-auto bg-gray-50',
        search.length > 0 && 'border-2 border-gray-400 min-h-96 shadow-lg'
      )}
    >
      <div
        className={clsx(
          'w-full  md:grow-0 text-foreground bg-background rounded-lg border-2 border-gray-400 pl-10 pb-2',
          search.length > 0 && 'border-none shadow-gray-100 rounded-none rounded-tl-lg rounded-tr-lg'
        )}
      >
        <p className="text-xs pt-2 pb-1 text-muted-foreground font-mono">
          Press <span className="rounded-lg border px-3 py-[1px] text-xs ">ESC</span> or click outside to close
        </p>
        <div className="relative flex">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            ref={ref}
            onChange={handleSearch}
            value={search}
            type="input"
            placeholder="Search..."
            className="mx-2 pl-12 flex-1 focus:outline-none active:outline-none hover:outline-none py-3 border-none rounded-lg shadow-none text-lg"
          />
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2"
          >
            {search.length > 0 && (
              <XIcon className="text-gray-400 hover:text-gray-600 bg-gray-100 h-4 w-4 rounded-full" />
            )}
          </button>
        </div>
      </div>
      {search.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1">
          <SearchBarHeader setAi={setAi} />
          <div className="w-full flex-1 py-2 px-3">
            {ai ? <SearchAI ai={ai} search={search} /> : <SearchResultApp />}
          </div>
          {/* <SearchBarFooter /> */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Search;
