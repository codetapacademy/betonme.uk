import React, { useEffect, useState } from "react";
import * as ACS from "./auction-card.style";
import image from "../../asset/images/bicycle.jpg";
import { db, storage, storageRef } from "../../config/firebase";

export const AuctionCard = ({ id }) => {
  const [cardData, setCardData] = useState({});
  const [imageURL, setImageURL] = useState({});

  useEffect(() => {
    db.collection("auctions")
      .doc(id)
      .get()
      .then((snapshot) => setCardData(snapshot.data()));
  }, []);

  useEffect(() => {
    storageRef
      .child(`images/${cardData.auctionImagePath}`)
      .getDownloadURL()
      .then((url) => {
        setImageURL(url);
      });
  }, []);

  let imageRef = storage.ref(`images/${cardData.auctionImagePath}`);

  return (
    <ACS.ActionCard>
      <ACS.ActionCardHeader>20:35:21</ACS.ActionCardHeader>
      <ACS.ActionCardBody>
        <ACS.ActionCardImage src={imageURL} />
        <ACS.ProductName>{cardData?.title}</ACS.ProductName>
        <ACS.PriceContainer>
          <ACS.Price>
            <ACS.PriceText>Start Price</ACS.PriceText>
            <ACS.PriceValue>$ {cardData?.startingPrice}</ACS.PriceValue>
          </ACS.Price>
          <ACS.Price>
            <ACS.Price>
              <ACS.PriceText>Current Price</ACS.PriceText>
              <ACS.PriceValue>$ {cardData?.currentPrice}</ACS.PriceValue>
            </ACS.Price>
          </ACS.Price>
        </ACS.PriceContainer>
        <ACS.CardButton to={`/auction/${id}`}>Submit a bit</ACS.CardButton>
      </ACS.ActionCardBody>
    </ACS.ActionCard>
  );
};
