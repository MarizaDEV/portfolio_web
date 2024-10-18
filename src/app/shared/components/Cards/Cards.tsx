import { Card, BoxCard, TextCard } from "./styles/styles";

interface CardsProps {
  image: string;
  text: string;
}

export const Cards: React.FC<CardsProps> = ({ image, text }) => {
  return (
    <Card>
      <BoxCard>
        <img
          src={image}
          alt={text}
          style={{ width: "100%", height: "100%", padding: "5px" }}
        />
      </BoxCard>
      <TextCard>{text}</TextCard>
    </Card>
  );
};
