import React, { useState } from "react";
import { BoxImagens, ImagensCarrossel } from "./styles/styles";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";

const imagensCarrossel: string[] = [banner1, banner2, banner3, banner4];

export const Carrossel: React.FC = () => {
  const [imagemAtiva, setImagemAtiva] = useState<string>(imagensCarrossel[0]);

  const handleClickImagem = (imagem: string) => {
    setImagemAtiva(imagem);
  };

  return (
    <BoxImagens>
      <img className="banner-image" src={imagemAtiva} alt="Imagem principal" />
      <ImagensCarrossel>
        {imagensCarrossel.map((imagem, index) => (
          <img
            key={index}
            className="banner"
            src={imagem}
            alt={`Imagem ${index + 1}`}
            onClick={() => handleClickImagem(imagem)}
          />
        ))}
      </ImagensCarrossel>
    </BoxImagens>
  );
};
