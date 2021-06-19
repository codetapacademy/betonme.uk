import styled from 'styled-components'

export const ActionCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`

export const ActionCardHeader = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
  font-weight: bold;
  padding: 20px;
  text-align: center;
  font-size: 36px;
`

export const ActionCardBody = styled.div`
  padding: 30px;
`

export const ActionCardImage = styled.img`
  height: 300px;
  width: 100%;
`

export const ProductName = styled.p`
  padding: 10px 10px;
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.color.dark};
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Price = styled.div`
  text-align: center;
`

export const PriceText = styled.p`
  color: #838386;
  font-size: 24px;
`

export const PriceValue = styled.p`
  font-size: 24px;
`
