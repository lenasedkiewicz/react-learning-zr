import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className="bg-transparent border-1 border-current p-3 rounded-sm cursor-pointer w-40 text-salmon transition-colors m-8 hover:text-white hover:bg-salmon"
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji!
      </button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
