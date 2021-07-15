import React from "react";
import { useSelector } from 'react-redux'
import * as S from "./auction-page.style";
import image from "../../asset/images/phone.jpg";

export const AuctionPage = ({title, price, description}) => {

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)

  return (
    <S.AuctionPageBackground>
      <S.AuctionCard>
        <S.AuctionTitle>{title}</S.AuctionTitle>
        <S.StartingPrice>Starting Price: ${price}</S.StartingPrice>
        <S.StyledImage src={image} alt="Auction image" />
        <S.DescripitonTitle>Description</S.DescripitonTitle>
        <S.DescriptionContent>{description}</S.DescriptionContent>
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
        {isLoggedIn && <S.BitButton>Place Bit</S.BitButton>}
      </S.RightContainer>
    </S.AuctionPageBackground>
  );
};
