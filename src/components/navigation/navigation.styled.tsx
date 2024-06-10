import { styled } from "solid-styled-components";

export const NavigationContainer = styled.li(({ activeGradients }: any) => {
  return `
  width: 350px;
  height: calc(100% - 20px);
  margin-right: 0px;
  margin-left: auto;
  display: flex;
`;
});

export const NavigationWrapper = styled.div(({ activeGradients }: any) => {
  return `
height: 250px;
  padding-left: 20px;
   border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, ${activeGradients.grad1}, ${activeGradients.grad2});
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
`;
});

export const NavigationElement = styled.li(
  ({ active, activeGradients }: any) => {
    return `
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, ${activeGradients.grad1}, ${activeGradients.grad2});
  transition: all 0.3s ease-in-out;
  border-left: 0;
  border-right: 0;
  border-top: 0 ;
  margin-top: 10px;
    &:hover {
      color: white;
      border-image-source: linear-gradient(to left, ${activeGradients.grad2}, ${activeGradients.grad1});
      transform: scale(1.1); 
    }`;
  },
);
