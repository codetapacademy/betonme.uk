import React from "react";
import { useSelector } from 'react-redux'
import * as S from "./auction-page.style";
import image from "../../asset/images/phone.jpg";
import userEvent from "@testing-library/user-event";

export const AuctionPage = () => {

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)

  return (
    <S.AuctionPageBackground>
      <S.AuctionCard>
        <S.AuctionTitle>This will page auction title</S.AuctionTitle>
        <S.StartingPrice>Starting Price: $120</S.StartingPrice>
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
      <S.RightContainer>
        <S.WhiteContainer>
          <S.RemainingTime>Remaining time: 1d 12h</S.RemainingTime>
        </S.WhiteContainer>
        <S.WhiteContainer>
          <S.CurrentPrice>Current Price: $140</S.CurrentPrice>
        </S.WhiteContainer>
        <S.WhiteContainer>
          <S.TextIfLoggedOut><S.StyledLink>Register</S.StyledLink> or <S.StyledLink>login</S.StyledLink> to place a bid and to participate on the auction.</S.TextIfLoggedOut>
        </S.WhiteContainer>
        {!isLoggedIn && <S.RegisterButton>Register </S.RegisterButton>}
        {!isLoggedIn && <S.LogInButton>Log In</S.LogInButton>}
      </S.RightContainer>
    </S.AuctionPageBackground>
  );
};
