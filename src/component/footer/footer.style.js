import styled from 'styled-components'

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.color.darker};
  color: ${({ theme }) => theme.color.lighter};
  padding: 40px;
  text-align: center;
`
