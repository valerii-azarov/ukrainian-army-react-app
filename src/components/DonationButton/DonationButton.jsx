import { Button } from "./style.js";

export const DonationButton = ({ theme, onClick }) => {
  return (
    <Button theme={theme} onClick={onClick}>
      Задонатити
    </Button>
  );
};