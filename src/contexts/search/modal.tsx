import React from 'react';
import { SearchModalProps } from './types';
import { useSearch } from '.';
import { motion } from 'framer-motion';

const SearchModal = ({ children }: SearchModalProps) => {
  const { open, setOpen, setSearch } = useSearch();

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
      setSearch('');
    }
  };

  return (
    open && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClickCapture={handleClose}
        className="z-30 w-screen border h-screen fixed top-0 left-0 flex justify-center pt-12  bg-black/10 items-start overflow-hidden"
      >
        {children}
      </motion.div>
    )
  );
};

export default SearchModal;
