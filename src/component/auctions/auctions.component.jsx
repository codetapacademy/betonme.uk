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
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </SA.StyledGrid>
    </SA.AuctionsSection>
  )
}
