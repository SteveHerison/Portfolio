"use client";
import { ArrowUpWideNarrow } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    // Mostrar o botão quando o scroll for maior que 500px
    if (window.scrollY > 500 && !show) {
      setShow(true);
    }

    // Esconder o botão quando o scroll for menor ou igual a 500px
    if (window.scrollY <= 500 && show) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-10 right-4 z-40">
      {show && (
        <button
          onClick={scrollToTop}
          className="shadow-lg shadow-purple-950 p-2 bg-purple-950 rounded-xl"
        >
          <ArrowUpWideNarrow size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
