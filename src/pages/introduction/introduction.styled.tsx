import { styled, keyframes } from "solid-styled-components";

export const TypingAnimationContainer = styled.div`
  margin: auto;
  width: max-content;
  position: relative;
  alig-text: center;
`;

export const TypingAnimationsWrapper = styled.div`
    width: 400px;
    height: 76px;h
`;

const scaleAnimationIn = keyframes`
  0% {
   opacity: 0; 
    animation-timing-function: ease-out;
  }
  100% {
   opacity: 1; 
    transform: scale(1, 1);
  }
`;

export const QuestionHeaderPausedText = styled.div`
  animation: ${scaleAnimationIn} 1s;
  animation-delay: 1s;
  animation-fill-mode: both;
`;
