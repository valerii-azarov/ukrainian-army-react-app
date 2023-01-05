import { 
  Container, 
  Wrapper, 
  Info, 
  Title, 
  Description, 
  Image 
} from "./style.js";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import soldier from "../../assets/images/soldier.png";

export const Home = ({ theme, changeTheme }) => {
  return (
    <Container theme={theme}>
      <Wrapper>
        <Info>
          <Title>
            Разом переможемо!
          </Title>
          <Description>
            Ми збираємо на дрони для ЗСУ разом із платформою UNITED24.
          </Description>
          <DonationButton theme={theme} onClick={changeTheme} />
        </Info>
        <Image src={soldier} alt="" />
      </Wrapper>
    </Container>
  );
};