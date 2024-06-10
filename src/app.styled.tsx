import { styled } from "solid-styled-components";

export const TopLeftCorner = styled.div(({ activeGradients }: any) => {
  return `
  border-top-left-radius: 15px;
  background-image: linear-gradient(
      to bottom right,
      ${activeGradients.grad1},
      transparent 50%
    ),
    linear-gradient(to bottom right, ${activeGradients.grad2} 50%, transparent 51%);
  width: 300px;
  height: 300px;
  background-color: transparent;
  position: absolute;
  left: 0px;
  z-index: 1;
`;
});

export const BottomRightCorner = styled.div(({ activeGradients }: any) => {
  return `
  border-bottom-right-radius: 15px;
  background-image: linear-gradient(
      to top left,
      ${activeGradients.grad1},
      transparent 50%
    ),
    linear-gradient(to top left, ${activeGradients.grad2} 50%, transparent 51%);
  width: 300px;
  height: 300px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 1;
`;
});

export const ContentWrapper = styled.div``;
