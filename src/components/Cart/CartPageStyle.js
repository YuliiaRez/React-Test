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

export const CartHeader = styled.h1`
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 40px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  width: 80%;
`;

export const ContentPlacement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  padding: 20px 0 20px 0;
`;

export const Img = styled.img`
  position: absolute;
  height: 185px;
  width: 141px;
  object-fit: cover;
`;

export const ArrowsSliderNext = styled.img`
  cursor: pointer;
  background-color: #2c2c2d;
`;

export const ArrowsSliderPrev = styled.img`
  cursor: pointer;
  transform: rotate(180deg);
  background-color: #2c2c2d;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 185px;
  width: 141px;
`;

export const ArrowsContainer = styled.div`
  position: relative;
  bottom: -40%;
  width: 20%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 px 0 6px;
  color: black;
  opacity: 0.7;
`;

export const Brand = styled.p`
  font-size: 1.65rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 1.65rem;
  margin-bottom: 25px;
`;

export const Tax = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;
export const Quantaty = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 185px;
`;

export const CounterBtn = styled.div`
  display: flex;
  height: 45px;
  width: 45px;
  border: 1px solid #333;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const InfoContainer = styled.div`
  width: 70%;
`;
export const Counter = styled.p`
  font-weight: 500;
`;
export const CartSpec = styled.p`
  margin-bottom: 20px;
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
