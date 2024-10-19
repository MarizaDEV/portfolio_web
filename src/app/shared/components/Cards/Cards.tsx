import { Card, BoxCard, TextCard, BoxStyledImg, BoxImg } from "./styles/styles";

interface CardsProps {
  image: string;
  text: string;
  link: string;
}

export const Cards: React.FC<CardsProps> = ({ image, text, link }) => {
  return (
    <Card>
      <BoxCard>
        <BoxStyledImg>
          <BoxImg>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={text}
                style={{ width: "100%", height: "100%", padding: "5px" }}
              />
            </a>
          </BoxImg>
        </BoxStyledImg>
        <TextCard>{text}</TextCard>
      </BoxCard>
    </Card>
  );
};
