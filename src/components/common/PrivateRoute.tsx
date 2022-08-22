import React, { memo, useState } from "react";
import styled from "styled-components";

export interface PrivateRouteStates {}

export interface PrivateRouteProps {
  children?: string;
}

const PrivateRouteStyled = styled.div``;
export const PrivateRoute: React.FC<PrivateRouteProps> = memo(
  ({ children }) => {
    return <PrivateRouteStyled>Private Route</PrivateRouteStyled>;
  }
);
