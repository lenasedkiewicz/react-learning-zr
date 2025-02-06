import { Item } from "../Item/Item";
import styles from "./List.module.css";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledButton = styled.button`
  background: salmon;
  color: white;
  border: none;
`;

export function List() {
  return (
    <>
      <StyledButton>Test</StyledButton>
      <button
        className={styles.btn}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Sprawdź liczbę dostępnych emoji!
      </button>
      <ul className={styles.list}>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
