const SearchBarHeader = ({ setAi }: { setAi: (ai: boolean) => void }) => {
  return (
    <div className="w-full py-2 px-3 text-start text-sm flex gap-3">
      <button
        onClick={() => setAi(false)}
        className="py-2 px-3 hover:bg-gray-200 text-muted-foreground w-full text-start rounded-md transition-colors duration-200"
      >
        🔍 Search within application
      </button>

      <button
        onClick={() => setAi(true)}
        className="py-2 px-3 hover:bg-gray-200 text-muted-foreground w-full text-start rounded-md transition-colors duration-200"
      >
        ✨ Search AI
      </button>
    </div>
  );
};

export default SearchBarHeader;
