import { 
  Wrapper, 
  LogoContainer,
  LogoTitle, 
  List, 
  ListItem 
} from "./style.js";
import logo from "../../assets/images/helmet.png";
import twitter from "../../assets/images/socialMedia/twitter.svg";
import instagram from "../../assets/images/socialMedia/instagram.svg";
import facebook from "../../assets/images/socialMedia/facebook.svg";

const socialMediaItems = [
  {
    socialMedia: "twitter",
    icon: twitter,
    alt: "",
    link: "https://www.twitter.com",
  },
  {
    socialMedia: "instagram",
    icon: instagram,
    alt: "",
    link: "https://www.instagram.com",
  },
  {
    socialMedia: "facebook",
    icon: facebook,
    alt: "",
    link: "https://www.facebook.com",
  },
];

export const Footer = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={logo} alt="" />
        <LogoTitle>UKRAINIAN ARMY</LogoTitle>
      </LogoContainer>
      <List>
        {socialMediaItems.map((item) => (
          <ListItem href={item.link} target="" key={item.socialMedia}>
            <img src={item.icon} alt={item.alt} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};