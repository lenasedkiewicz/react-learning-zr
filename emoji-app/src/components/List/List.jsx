import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className="text-salmon hover:bg-salmon m-8 w-40 cursor-pointer rounded-sm border-1 border-current bg-transparent p-3 transition-colors hover:text-white"
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
