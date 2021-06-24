import React from 'react'
import * as S from './sell.style'

export const Sell = () => {

  return(
    <S.StyledSell>
      <S.StyledTitle>Sell an object</S.StyledTitle>
      <S.StyledForm>
        <S.StyledSectionTitle>Object details</S.StyledSectionTitle>
        <S.StyledLabel>Auction Title</S.StyledLabel>
        <S.StyledInput type="text" placeholder="Ex.: A big white bicycle with 2 rims" />
        <S.StyledLabel>Images</S.StyledLabel>
        <S.StyledInput type="file" />
        <S.StyledLabel>Description</S.StyledLabel>
        <S.StyledTextArea placeholder="Try to write something that you wish you will find if you read this"></S.StyledTextArea>
        <S.StyledLabel>Starting Price</S.StyledLabel>
        <S.StyledInputPrice type="text" />
        <S.StyledSelect>
          <S.StyledOption value="lei">LEI</S.StyledOption>
          <S.StyledOption value="gbp">GBP</S.StyledOption>
        </S.StyledSelect>
        <S.StyledSectionTitle>Contact info</S.StyledSectionTitle>
      </S.StyledForm>
    </S.StyledSell>
  )
}
