import React from "react";
import { useSearch } from ".";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

const SearchResultApp = () => {
  const { handleSearch, setSearch, searchResult, setOpen } = useSearch();
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-1 lg:gap-2 xl:gap-3 flex-1 mb-4 max-h-[70vh] overflow-y-scroll scrollbar pr-1"
    >
      {searchResult.length > 0 ? (
        searchResult.map((info) => {
          return (
            <div
              key={info.id}
              className="flex flex-col gap-2 border py-2 px-3 rounded text-foreground"
            >
              <Link href={`/blog/${info.title}`} key={info.id} onClick={() => setOpen(false)}>
                <h3 className="text-xl font-medium mb-1">{info.title}</h3>
                <p>{info.shortDescription}</p>
              </Link>
              <div className="mt-3 flex items-center justify-start gap-1 lg:gap-2 me-auto">
                {info.tags &&
                  info.tags.map((tag: string) => (
                    <button
                      onClick={() => {
                        setSearch(tag);
                        handleSearch({ target: { value: tag } });
                      }}
                      key={tag}
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mx-auto"
                    >
                      {tag}
                    </button>
                  ))}
              </div>
            </div>
          );
        })
      ) : (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mx-auto text-xl"
        >
          No match found!
        </motion.p>
      )}
    </motion.div>
  );
};

export default SearchResultApp;
