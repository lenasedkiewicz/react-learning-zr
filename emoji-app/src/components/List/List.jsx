import { Item } from "../Item/Item";
import "tailwindcss";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className="text-3xl"
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji!
      </button>
      <ul>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
