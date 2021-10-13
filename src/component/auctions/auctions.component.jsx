import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import * as SA from "./auctions.style";
import { AuctionCard } from "../auction-card";

export const Auctions = () => {
  const [auctionsList, setAuctionsList] = useState([]);
  const [howToOrder, setHowToOrder] = useState("currentPrice");

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

  let orderByStartingPriceLTH = () => {
    db.collection("auctions")
      .orderBy("startingPrice")
      .onSnapshot((snap) => {
        let list = [];

        snap.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setAuctionsList(list);
      });
  };
  let orderByStartingPriceHTL = () => {
    db.collection("auctions")
      .orderBy("startingPrice", "desc")
      .onSnapshot((snap) => {
        let list = [];

        snap.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setAuctionsList(list);
      });
  };

  return (
    <SA.AuctionsSection>
      <SA.FirstImage />
      <SA.SectionTitle>Active Auctions</SA.SectionTitle>
      <SA.StyledDivider />
      <SA.StyledGrid>
        <SA.StyledFilter>
          <SA.FilterTitle>Order By</SA.FilterTitle>
          <SA.StyledOrderBy>Current Price - high to low</SA.StyledOrderBy>
          <SA.StyledOrderBy>Current Price - low to high</SA.StyledOrderBy>
          <SA.StyledOrderBy onClick={orderByStartingPriceHTL}>
            Start Price - high to low
          </SA.StyledOrderBy>
          <SA.StyledOrderBy onClick={orderByStartingPriceLTH}>
            Start Price - low to high
          </SA.StyledOrderBy>
        </SA.StyledFilter>
        {auctionsList.map(({ id }) => {
          return <AuctionCard key={id} id={id} />;
        })}
      </SA.StyledGrid>
      <SA.ButtonsWrapper>
        <SA.ButtonB>1</SA.ButtonB>
        <SA.ButtonB>2</SA.ButtonB>
        <SA.ButtonB>3</SA.ButtonB>
      </SA.ButtonsWrapper>
    </SA.AuctionsSection>
  );
};
