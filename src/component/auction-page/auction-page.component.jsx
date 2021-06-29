import React from "react";
import * as S from "./auction-page.style";
import image from "../../asset/images/phone.jpg";

export const AuctionPage = () => {
  return (
    <S.AuctionPageBackground>
      <S.AuctionCard>
        <S.AuctionTitle>This will page auction title</S.AuctionTitle>
        <S.StyledImage src={image} alt="Auction image" />
        <S.DescripitonTitle>Description</S.DescripitonTitle>
        <S.DescriptionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna
          lacinia lorem pharetra accumsan quis faucibus sapien. Pellentesque
          mollis molestie ante, quis molestie est. Fusce iaculis nisi odio.
          Nulla tincidunt sem vitae tortor aliquet ornare. Etiam vel sapien
          ultricies, blandit sapien eu, facilisis diam. In volutpat lectus sed
          felis porttitor bibendum. In tempor suscipit quam non porttitor. Sed
          quis eros bibendum, egestas tortor nec, posuere sapien. Morbi semper
          tincidunt mauris, sed dapibus libero. Nam sed turpis at ante efficitur
          facilisis. Quisque vel mauris nibh. Sed malesuada leo ex, a congue sem
          cursus eu.
        </S.DescriptionContent>
      </S.AuctionCard>
      <S.RightContainer></S.RightContainer>
    </S.AuctionPageBackground>
  );
};
