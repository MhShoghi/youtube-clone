import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
function Button({ children, ...other }) {
  return <Buttons {...other}>{children}</Buttons>;
}

export default Button;
