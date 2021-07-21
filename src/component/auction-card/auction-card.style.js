import styled from "styled-components";
import { Link } from "@reach/router";

export const ActionCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`;

export const ActionCardHeader = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
  font-weight: bold;
  padding: 20px;
  text-align: center;
  font-size: 36px;
`;

export const ActionCardBody = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionCardImage = styled.img`
  height: 300px;
  width: 100%;
`;

export const ProductName = styled.p`
  padding: 10px 10px;
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.color.dark};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Price = styled.div`
  text-align: center;
`;

export const PriceText = styled.p`
  color: #838386;
  font-size: 24px;
`;

export const PriceValue = styled.p`
  font-size: 24px;
`;

export const CardButton = styled(Link)`
  width: 200px;
  height: 60px;
  color: ${({ theme }) => theme.color.darker};
  background-color: ${({ theme }) => theme.color.main};
  text-transform: uppercase;
  font-weight: 800;
  border-color: transparent;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
  transition: 250ms;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.darker};
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.8);
  }
`;
