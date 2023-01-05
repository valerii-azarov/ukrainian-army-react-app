import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttonColor};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  width: 208px;
  height: 48px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: #b5b8b1;
  }
  
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 14px;
  }
`;
