import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center"
    >
      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
    </div>
  );
};

export default Cursor;