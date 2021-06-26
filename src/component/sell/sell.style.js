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
  margin-bottom: 100px;
`

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.darker};
  display: block;
  padding: 10px 0;
`

export const StyledInput = styled.input`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 5px;
  border-color: transparent;
  width: 50%;
`

export const StyledInputPrice = styled.input`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 5px;
  border-color: transparent;
  width: 15%;
`

export const StyledTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.color.light};
  width: 50%;
  height: 200px;
  padding: 10px;
  resize: none;
  border: none;
`

export const StyledSelect = styled.select`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 5px;
  border-color: transparent;
  margin-left: 20px;
`

export const StyledFormSeparator = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.color.light};
  margin: 20px -30px;
`

export const StyledOption = styled.option`
  padding: 5px;
`

export const StyledSectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.color.darker};
`

export const StyledSubmit = styled.input`
  padding: 20px 100px;
  font-size: 24px;
  border-radius: 34px;
  border: none;
  box-shadow: 1px 2px 2px #000;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.main};
  transition: 250ms;

  &:hover {
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 2px 4px 4px #000;
  }
`
