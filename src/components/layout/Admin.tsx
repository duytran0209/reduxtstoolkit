import React, { memo, useState } from "react";
import styled from "styled-components";

export interface AdminStates {}

export interface AdminProps {
  children?: string;
}

const AdminStyled = styled.div``;
export const Admin: React.FC<AdminProps> = memo(({ children }) => {
  return <AdminStyled></AdminStyled>;
});
