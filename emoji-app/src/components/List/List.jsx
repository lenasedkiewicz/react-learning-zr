import { Item } from "../Item/Item";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 30px;
`;

const StyledItem = styled(Item)`
  margin-bottom: 50px;
`;

export function List() {
  return (
    <>
      <StyledButton
        $margin={30}
        $primary
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji!
      </StyledButton>
      <StyledList>
        {emojis.map((emoji) => (
          <StyledItem key={emoji} emoji={emoji} />
        ))}
      </StyledList>
    </>
  );
}
