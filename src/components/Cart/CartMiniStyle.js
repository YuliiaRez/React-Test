import styled from "styled-components";

export const Specs = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Attr = styled.div`
  display: flex;
  width: 33px;
  height: 25px;
  background-color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  margin-right: 8px;
`;
export const ChosenSpec = styled.div`
  display: flex;
  width: 33px;
  height: 25px;
  background-color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  background: rgba(29, 31, 34, 1);
  color: white;
  margin-right: 8px;
`;
export const ColoredSpec = styled(Attr)`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  opacity: 0.7;
  border: 2px solid;
`;

export const ChosenColoredSpec = styled(ColoredSpec)`
  background: ${(props) => props.color};
  opacity: 1;
`;

export const CartContainer = styled.div`
  position: absolute;
  left: auto;
  right: 0;
  top: 0;
  height: auto;
  width: 325px;
  display: flex;
  flex-direction: column;
  z-index: 50;
  background-color: white;
  -webkit-box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  padding: 16px;
`;

export const CartHeader = styled.p`
  font-weight: 700;
  margin-bottom: 25px;
`;

export const ProductInfoInCart = styled.div`
  width: 170px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 105px;
  height: 137px;
  object-fit: cover;
`;

export const CartMiniBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  box-shadow: inset 0px 0px 0px 1px #333;
  height: 43px;
  width: 150px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const CheckoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(94, 206, 123, 1);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  height: 43px;
  width: 150px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(42 139 67);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartSpec = styled.p`
  margin-bottom: 20px;
`;

export const Price = styled(CartSpec)`
  font-weight: 500;
`;

export const SpecsCart = styled.p`
  font-size: 0.8rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 137px;
  align-items: center;
`;

export const CounterBtn = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  border: 1px solid #333;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const Counter = styled.p`
  font-weight: 500;
`;
