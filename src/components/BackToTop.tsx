"use client";
import { ArrowUpWideNarrow } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY >= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-3 right-4 z-20">
      {show && (
        <button
          onClick={scrollToTop}
          className="shadow-lg shadow-purple-950 p-2 bg-purple-950 rounded-xl"
        >
          <ArrowUpWideNarrow size={20} />{" "}
        </button>
      )}
    </div>
  );
};

export default BackToTop;
