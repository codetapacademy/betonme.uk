import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { logheazaMaAction, scoateMaAction } from "../../store/user.action";
import { AuctionCard } from "../auction-card";
import * as HOS from "./home.style";

export const Home = () => {
  const [auctionsList, setAuctionsList] = useState([]);

  useEffect(() => {
    db.collection("auctions").onSnapshot((snap) => {
      let list = [];

      snap.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAuctionsList(list);
    });
  }, []);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  //Dispatch the action to the store(to the reducer)
  const logheazaMa = () => {
    dispatch(logheazaMaAction());
  };

  const scoateMa = () => {
    dispatch(scoateMaAction());
  };

  return (
    <HOS.HomeContainer>
      <HOS.Poster>
        <HOS.PosterContent>
          <HOS.PosterText>The best place to buy and sell!</HOS.PosterText>
          {!isLoggedIn ? (
            <HOS.PosterButton onClick={logheazaMa}>Register</HOS.PosterButton>
          ) : (
            <HOS.PosterButton onClick={scoateMa}>LogOUT</HOS.PosterButton>
          )}
        </HOS.PosterContent>
      </HOS.Poster>
      <HOS.ActionSectionTitle>
        <HOS.ActionSectionTitleSpan>Current</HOS.ActionSectionTitleSpan>Auctions
      </HOS.ActionSectionTitle>
      <HOS.ActionSection>
        {auctionsList.map(({ id }) => {
          return <AuctionCard key={id} id={id} />;
        })}
        <HOS.ContainerAllColumns>
          <HOS.ViewAllButton to="/auctions">View all actions</HOS.ViewAllButton>
        </HOS.ContainerAllColumns>
      </HOS.ActionSection>
      <HOS.HowItWorksTitle>
        <HOS.ActionSectionTitleSpan>How</HOS.ActionSectionTitleSpan>It works
      </HOS.HowItWorksTitle>
      <HOS.HowItWorksSection>
        <HOS.HowItWorksCard>
          <HOS.HowItWorksCircle>01</HOS.HowItWorksCircle>
          <HOS.HowCardTitle>REGISTER</HOS.HowCardTitle>
          <HOS.HowCardText>
            To start using our auction, you’ll need to register. It’s completely
            free!
          </HOS.HowCardText>
        </HOS.HowItWorksCard>
        <HOS.HowItWorksCard>
          <HOS.HowItWorksCircle>01</HOS.HowItWorksCircle>
          <HOS.HowCardTitle>REGISTER</HOS.HowCardTitle>
          <HOS.HowCardText>
            To start using our auction, you’ll need to register. It’s completely
            free!
          </HOS.HowCardText>
        </HOS.HowItWorksCard>
        <HOS.HowItWorksCard>
          <HOS.HowItWorksCircle>01</HOS.HowItWorksCircle>
          <HOS.HowCardTitle>REGISTER</HOS.HowCardTitle>
          <HOS.HowCardText>
            To start using our auction, you’ll need to register. It’s completely
            free!
          </HOS.HowCardText>
        </HOS.HowItWorksCard>
      </HOS.HowItWorksSection>
    </HOS.HomeContainer>
  );
};
