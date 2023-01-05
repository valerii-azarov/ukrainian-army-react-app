import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 1170px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 720px) {
    margin: 15px auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const LogoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  width: 10.2em;
  margin-left: 0.5em;
  color: #161212;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const ListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 43px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #b9d0f7;

  @media screen and (max-width: 720px) {
    height: 30px;
    width: 30px;
    margin-left: 0;

    img {
      width: 18px;
    }
  }
`;
