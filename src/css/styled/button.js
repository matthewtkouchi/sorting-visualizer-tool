import styled from "styled-components";

const InputButton = styled.input`
  background-color: transparent;
  color: #212121;
  border-color: transparent;
  width: 200px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #4d8fff;
  }
`;

export default InputButton;
