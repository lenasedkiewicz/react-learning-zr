import { Item } from "../Item/Item";
import styles from "./List.module.css";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledButton = styled.button`
  background: transparent;
  border: solid 1px;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  color: salmon;
  transition: background 0.3s;
  margin: 30px;

  &:hover {
    color: white;
    background: salmon;
  }
`;

export function List() {
  return (
    <>
      <StyledButton onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>
        Pokaż liczbę emoji!
      </StyledButton>
      <button
        className={styles.btn}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji!
      </button>
      <ul className={styles.list}>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
