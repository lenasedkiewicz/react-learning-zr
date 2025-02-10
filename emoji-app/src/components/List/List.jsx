import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className=""
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji!
      </button>
      <ul className="flex flex-col gap-30 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
