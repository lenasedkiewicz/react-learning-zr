import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
  background: salmon;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
`;

const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  font-size: 32px;
  transition: transform 0.3s;
  ${({ $zoomed }) => $zoomed && "transform: scale(2)"};
`;

export function Item({ emoji, className }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <StyledItem className={className}>
      <StyledEmoji $zoomed={zoomed}>{emoji}</StyledEmoji>
      <StyledButton
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </StyledButton>
    </StyledItem>
  );
}
