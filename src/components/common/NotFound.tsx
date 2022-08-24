import React, { memo } from "react";
import styled from "styled-components";

export interface NotFoundProps {
  children?: string;
}

const NotFoundStyled = styled.div``;
export const NotFound: React.FC<NotFoundProps> = memo(({ children }) => {
  return <NotFoundStyled>Not found</NotFoundStyled>;
});
