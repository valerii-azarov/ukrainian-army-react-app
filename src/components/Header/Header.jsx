import { useState } from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  LogoTitle,
  NavList,
  ListItem,
  HamburgerMenu,
} from "./style.js";
import logo from "../../assets/images/helmet.png";

const navItems = [
  "Задонатити на ЗСУ", 
  "Блог", 
  "Контакт"
];

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Wrapper isVisible={isVisible}>
        <LogoContainer>
          <img src={logo} alt="" />
          <LogoTitle>UKRAINIAN ARMY</LogoTitle>
        </LogoContainer>
        <NavList isVisible={isVisible}>
          {navItems.map((item) => (
            <ListItem href="#" key={item}>
              {item}
            </ListItem>
          ))}
        </NavList>
        <HamburgerMenu
          isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        >
          <span className="active"></span>
        </HamburgerMenu>
      </Wrapper>
    </Container>
  );
};