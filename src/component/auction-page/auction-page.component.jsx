import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "@reach/router";
import { db } from "../../config/firebase";
import { CalculateTime } from "../../utils/calculate-time"
import * as S from "./auction-page.style";
import image from "../../asset/images/phone.jpg";

export const AuctionPage = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const userId = useSelector(({ user }) => user?.userData?.uid);
  const { id } = useParams();

  const [auction, setAuction] = useState({});
  let startDate = auction.startDate;

  const [timeLeft, setTimeLeft] = useState(CalculateTime(startDate));

  useEffect(() => {
    db.collection("auctions")
      .doc(id)
      .onSnapshot((snapshot) => setAuction(snapshot.data()));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(CalculateTime(startDate));
    }, 1000);
  });

  const placeBit = () => {
    db.collection("auctions")
      .doc(id)
      .set(
        {
          auctionWinnerId: userId,
          // auctionWinnerMail: userEmaik
          currentPrice: (+auction.currentPrice || +auction.startingPrice) * 1.2,
        },
        { merge: true }
      );
  };

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
          <S.RemainingTime>
            Remaining time: {timeLeft.days} days {timeLeft.hours} hours{" "}
            {timeLeft.minutes} minutes {timeLeft.seconds} seconds
          </S.RemainingTime>
        </S.WhiteContainer>

        <S.WhiteContainer>
          <S.CurrentPrice>
            Current Price: {auction.currentPrice || auction.startingPrice}
          </S.CurrentPrice>
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
          isLoggedIn && <S.BitButton onClick={placeBit}>Place Bid</S.BitButton>
        )}
      </S.RightContainer>
    </S.AuctionPageBackground>
  );
};
