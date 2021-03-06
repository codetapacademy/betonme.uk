import React, { useEffect, useState } from "react";
import * as ACS from "./auction-card.style";
import image from "../../asset/images/bicycle.jpg";
import { db } from "../../config/firebase";

export const AuctionCard = ({ id }) => {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    db.collection("auctions")
      .doc(id)
      .get()
      .then((snapshot) => setCardData(snapshot.data()));
  }, []);

  return (
    <ACS.ActionCard>
      <ACS.ActionCardHeader>20:35:21</ACS.ActionCardHeader>
      <ACS.ActionCardBody>
        <ACS.ActionCardImage src={image} />
        <ACS.ProductName>{cardData?.title}</ACS.ProductName>
        <ACS.PriceContainer>
          <ACS.Price>
            <ACS.PriceText>Start Price</ACS.PriceText>
            <ACS.PriceValue>$ {cardData?.startingPrice}</ACS.PriceValue>
          </ACS.Price>
          <ACS.Price>
            <ACS.Price>
              <ACS.PriceText>Current Price</ACS.PriceText>
              <ACS.PriceValue>$ 235.00</ACS.PriceValue>
            </ACS.Price>
          </ACS.Price>
        </ACS.PriceContainer>
        <ACS.CardButton to={`/auction/${id}`}>Submit a bit</ACS.CardButton>
      </ACS.ActionCardBody>
    </ACS.ActionCard>
  );
};
