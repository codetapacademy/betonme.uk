import styled from 'styled-components'

export const StyledSell = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  padding: 30px 200px;
`

export const StyledTitle = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.color.darker};
  font-weight: 700;
`

export const StyledForm = styled.form`
  background-color: #fff;
  padding: 30px;
`

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.darker};
`
