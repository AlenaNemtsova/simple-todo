import styled, { keyframes } from 'styled-components';

// Анимация появления цифры
const digitAppear = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface DigitStyledProps {
  $delay: string;
}

export const StyledDigit = styled.span<DigitStyledProps>`
  font-size: 8rem;
  display: inline-block;
  transform: translateY(20px);
  opacity: 0;
  animation: ${digitAppear} 0.5s ease-out ${({ $delay }) => $delay} forwards;
`;

// Анимация мерцания звезды
const starTwinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 0 5px white;
  }
`;

interface StarStyledProps {
  $size: string;
  $delay: string;
  $duration: string;
  $x: string;
  $y: string;
}

export const StyledStar = styled.div<StarStyledProps>`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  top: ${({ $y }) => $y};
  left: ${({ $x }) => $x};
  opacity: 0;
  animation: ${starTwinkle} ${({ $duration }) => $duration} ease-in-out ${({ $delay }) => $delay}
    infinite;
  will-change: transform, opacity; /* Оптимизация анимации */
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(circle at center, #4682b4 0%, #2a4e6c 100%);
  text-align: center;
  padding: 2rem;
  overflow: hidden;
  position: relative;
`;

export const NotFoundContentWrapper = styled.div`
  max-width: 600px;
  z-index: 2;
`;

export const NotFoundTitle = styled.h1`
  margin: 0;
  color: #fff;
  line-height: 1;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0 2rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotsWrapper = styled.span`
  display: inline-flex;
  margin-left: 0.25rem;
`;

export const dotBlink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Dot = styled.span`
  opacity: 0;
  animation: ${dotBlink} 1.5s infinite;

  &:nth-child(1) {
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
  }
`;

export const HomeButton = styled.button`
  position: relative;
  padding: 12px 24px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: #ff5252;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export const HomeButtonText = styled.span`
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
`;

export const arrowSlide = keyframes`
  to {
    opacity: 1;
    transform: translateX(5px);
  }
`;

export const ButtonArrow = styled.span`
  position: relative;
  left: 10px;
  z-index: 2;
  opacity: 0;
  animation: ${arrowSlide} 0.3s ease-out forwards;
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
