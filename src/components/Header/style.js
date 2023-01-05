import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1170px) {
    padding: 20px 24px;
  }

  @media screen and (max-width: 720px) {
    padding: 0px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }

  @media screen and (max-width: 720px) {
    img {
      width: 20px;
      height: 18.75px;
    }
  }
`;

export const LogoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  width: 10.2em;
  margin-left: 0.5em;
  color: #161212;

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

export const NavList = styled.nav`
  list-style-type: none;
  position: relative;

  @media (max-width: 650px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: ${(props) => (props.isVisible ? "35px" : "-10rem")};
    padding: ${(props) => (props.isVisible ? "1rem" : "0")};
    left: 0;
    right: 0;
    background-color: #ffffff;
    transition: all 500ms ease-in-out;
  }

  z-index: 99;
`;

export const ListItem = styled.a`
  position: relative;
  margin-left: 2rem;
  text-decoration: none;
  color: #000000;

  :before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #000000;
    transform: scale(0);
    transform-origin: right;
    transition: transform 500ms ease-in-out;
  }

  :hover {
    opacity: 0.6;
  }

  :hover:before {
    transform: scale(1);
    transform-origin: left;
  }
`;

export const HamburgerMenu = styled.div`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 24px;
  height: 1.4px;
  z-index: 999;

  @media (max-width: 650px) {
    display: flex;
  }

  span {
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: ${(props) =>
      props.isVisible ? "transparent" : `#000000`};
    border-radius: 5px;
    transition: all 500ms ease-in-out;

    :before,
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000000;
      border-radius: 5px;
    }

    :before {
      transform: ${(props) =>
        props.isVisible ? `rotate(-45deg)` : `translateY(8px)`};
      transition: all 1000ms ease-in-out;
    }

    :after {
      transform: ${(props) =>
        props.isVisible ? `rotate(45deg)` : `translateY(-8px)`};
      transition: all 1000ms ease-in-out;
    }
  }
`;
