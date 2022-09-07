import React from "react";
import styled from "styled-components";
import Button from "./Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SearchRounded } from "@mui/icons-material";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 0;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;

const IconButton = styled.div`
  cursor: pointer;
  background-color: rgb(248, 248, 248);
  border-left: 1px solid #ccc;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 200ms ease;
  &:hover {
    background-color: #eee;
  }

  & svg {
    padding: 0px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  padding: 0px 20px;
  position: relative;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <IconButton>
            <SearchRounded />
          </IconButton>
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
