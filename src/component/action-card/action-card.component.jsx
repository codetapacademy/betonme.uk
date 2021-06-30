import React from 'react'
import * as ACS from './action-card.style'
import Image from '../../asset/images/bicycle.jpg'

export const ActionCard = () => {

  return(
    <ACS.ActionCard>
      <ACS.ActionCardHeader>20:35:21</ACS.ActionCardHeader>
      <ACS.ActionCardBody>
        <ACS.ActionCardImage src={Image} />
        <ACS.ProductName>A big white bicycle with 2 rims</ACS.ProductName>
        <ACS.PriceContainer>
          <ACS.Price>
            <ACS.PriceText>Start Price</ACS.PriceText>
            <ACS.PriceValue>$ 120.00</ACS.PriceValue>
          </ACS.Price>
          <ACS.Price>
            <ACS.Price>
              <ACS.PriceText>Current Price</ACS.PriceText>
              <ACS.PriceValue>$ 235.00</ACS.PriceValue>
            </ACS.Price>
          </ACS.Price>
        </ACS.PriceContainer>
        <ACS.CardButton to="/auctionPage" >Submit a bit</ACS.CardButton>
      </ACS.ActionCardBody>
    </ACS.ActionCard>
  )
}
