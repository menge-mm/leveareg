import { useEffect, useLayoutEffect } from "react";

const useLockScroll = () => {
  const originalStyle = window.getComputedStyle(document.body).overflow;
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = originalStyle;
  };

  return { lockScroll, unlockScroll };
};

export default useLockScroll;
