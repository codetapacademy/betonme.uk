import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "@reach/router";
import { db } from "../../config/firebase";
import * as S from "./auction-page.style";
import image from "../../asset/images/phone.jpg";

export const AuctionPage = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const { id } = useParams();

  const [auction, setAuction] = useState({});

  useEffect(() => {
    db.collection("auctions")
      .doc(id)
      .get()
      .then((snapshot) => setAuction(snapshot.data()));
  }, []);

  return (
    <S.AuctionPageBackground>
      <S.AuctionCard>
        <S.AuctionTitle>{auction.title}</S.AuctionTitle>
        <S.StartingPrice>
          Starting Price: ${auction.startingPrice}
        </S.StartingPrice>
        <S.StyledImage src={image} alt="Auction image" />
        <S.DescripitonTitle>Description</S.DescripitonTitle>
        <S.DescriptionContent>{auction.description}</S.DescriptionContent>
      </S.AuctionCard>
      <S.RightContainer>
        <S.WhiteContainer>
          <S.RemainingTime>Remaining time: 1d 12h</S.RemainingTime>
        </S.WhiteContainer>
        <S.WhiteContainer>
          <S.CurrentPrice>Current Price: $140</S.CurrentPrice>
        </S.WhiteContainer>
        <S.WhiteContainer>
          <S.TextIfLoggedOut>
            <S.StyledLink>Register</S.StyledLink> or{" "}
            <S.StyledLink>login</S.StyledLink> to place a bid and to participate
            on the auction.
          </S.TextIfLoggedOut>
        </S.WhiteContainer>
        {!isLoggedIn ? (
          <>
            <S.RegisterButton>Register</S.RegisterButton>
            <S.LogInButton>Log In</S.LogInButton>
          </>
        ) : (
          isLoggedIn && <S.BitButton>Place Bit</S.BitButton>
        )}
      </S.RightContainer>
    </S.AuctionPageBackground>
  );
};
