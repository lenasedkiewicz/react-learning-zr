import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>
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
