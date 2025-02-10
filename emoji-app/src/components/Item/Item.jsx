import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-salmon py-8 px-12 rounded-3xl text-center overflow-hidden">
      <span
        className={`block mb-10 text-3xl transition-transform ${
          zoomed ? "scale-[2]" : "scale-[1]"
        }`}
      >
        {emoji}
      </span>
      <button
        className="bg-transparent border-1 border-current p-3 rounded-sm cursor-pointer w-40 text-white transition-colors hover:text-salmon hover:bg-white"
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
