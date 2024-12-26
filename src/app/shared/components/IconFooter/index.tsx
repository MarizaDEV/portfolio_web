import { BoxiconFooter, IconContainerFooter } from "./styles/styles";

interface IconesProps {
  image: string;
}
export const IconFooter: React.FC<IconesProps> = ({ image }) => {
  return (
    <IconContainerFooter>
      <BoxiconFooter>
        <img
          src={image}
          style={{ width: "100%", height: "100%", padding: "5px" }}
        />
      </BoxiconFooter>
    </IconContainerFooter>
  );
};
