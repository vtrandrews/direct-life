import { keyframes } from "styled-components";

export const colorFadeInUp = keyframes`
  0%, 100% {
    opacity: 0;
    color: #000;
  }
  50% {
    opacity: 1;
    color: #fff;
  }
`;