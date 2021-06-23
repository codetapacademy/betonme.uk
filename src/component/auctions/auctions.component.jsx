import React from 'react'
import * as SA from './auctions.style'
import { ActionCard } from '../action-card'

export const Auctions = () => {
  return(
    <SA.AuctionsSection>
      <SA.FirstImage />
      <SA.SectionTitle>Active Auctions</SA.SectionTitle>
      <SA.StyledDivider />
      <SA.StyledGrid>
        <SA.StyledFilter>
          <SA.FilterTitle>Order By</SA.FilterTitle>
          <SA.StyledOrderBy>Current Price - high to low</SA.StyledOrderBy>
          <SA.StyledOrderBy>Current Price - low to high</SA.StyledOrderBy>
          <SA.StyledOrderBy>Start Price - high to low</SA.StyledOrderBy>
          <SA.StyledOrderBy>Start Price - low to high</SA.StyledOrderBy>
        </SA.StyledFilter>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </SA.StyledGrid>
      <SA.SectionTitle>Future Auctions</SA.SectionTitle>
      <SA.StyledDivider />
      <SA.StyledGrid>
        <SA.StyledFilter>
          <SA.FilterTitle>Order By</SA.FilterTitle>
          <SA.StyledOrderBy>Start Price - high to low</SA.StyledOrderBy>
          <SA.StyledOrderBy>Start Price - low to high</SA.StyledOrderBy>
        </SA.StyledFilter>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </SA.StyledGrid>
    </SA.AuctionsSection>
  )
}
