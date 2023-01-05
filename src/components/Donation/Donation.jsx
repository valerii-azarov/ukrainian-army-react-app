import { 
  Image, 
  Container, 
  Wrapper, 
  Info, 
  Title, 
  Description 
} from "./style.js";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import rocket from "../../assets/images/rocket.png";

export const Donation = ({ theme, changeTheme }) => {
  return (
    <Container theme={theme}>
      <Wrapper>
        <Image src={rocket} alt="" />
        <Info>
          <Title>
            Більше донату<br />
            для ЗСУ!
          </Title>
          <Description>
            Ми побачимо, що країні не вистачає інструмента для зручних
            благодійних зборів. Не лише для благодійних фондів та волонтерів, а
            й для простих людей, які воюють, збираючи на пікапи та бронежилети.
          </Description>
          <DonationButton theme={theme} onClick={changeTheme} />
        </Info>
      </Wrapper>
    </Container>
  );
};