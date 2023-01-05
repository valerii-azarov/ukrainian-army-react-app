import {
  Wrapper,
  Title,
  Description,
  Box,
  CardImage,
  CardTitle,
  CardDescription,
} from "./style.js";
import wheat from "../../assets/images/wheat.png";
import tractor from "../../assets/images/tractor.png";
import watermelon from "../../assets/images/watermelon.png";

const boxItems = [
  {
    img: wheat,
    alt: "",
    title: "Кажи паляниця!",
    description: "Як відрізнити окупанта.",
  },
  {
    img: tractor,
    alt: "",
    title: "Вкрали танк!",
    description: "Український трактор краде російський танк.",
  },
  {
    img: watermelon,
    alt: "",
    title: "Кавун",
    description: "Бійці ЗСУ вже їдять херсонські кавуни.",
  },
];

export const Blog = () => {
  return (
    <Wrapper>
      <Title>Блог</Title>
      <Description>Цікаві факти про ЗСУ та український народ.</Description>
      <Box>
        {boxItems.map((item) => (
          <div key={item.title}>
            <CardImage src={item.img} alt={item.alt} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </div>
        ))}
      </Box>
    </Wrapper>
  );
};