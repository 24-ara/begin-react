import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <p>skyticket</p>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 16px;
  font-size: 24px;
`;
