import { useState } from "react";
import styles from "./Item.module.css";
import styled from "styled-components";

const StyledItem = styled.li`
  background: salmon;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
`;

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <StyledItem>
      <span className={`${styles.emoji} ${zoomed ? styles.zoomed : ""}`}>
        {emoji}
      </span>
      <button
        className={styles.btn}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </StyledItem>
  );
}
