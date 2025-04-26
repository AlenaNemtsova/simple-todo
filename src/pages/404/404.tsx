import { useState, FC } from 'react';
import { useNavigate } from 'react-router';
import {
  NotFoundContainer,
  NotFoundContentWrapper,
  NotFoundText,
  NotFoundTitle,
  Dot,
  DotsWrapper,
  HomeButton,
  HomeButtonText,
  ButtonArrow,
  StarsContainer,
  StyledStar,
  StyledDigit,
} from './404.styled';

interface DigitProps {
  delay: string;
  children: string;
}

const Digit: FC<DigitProps> = ({ delay, children }) => (
  <StyledDigit $delay={delay}>{children}</StyledDigit>
);

interface StarProps {
  index: number;
}

const Star: FC<StarProps> = ({ index }) => {
  const size = `${Math.random() * 3 + 1}px`;
  const delay = `${Math.random() * 2}s`;
  const duration = `${Math.random() * 3 + 2}s`;
  const x = `${Math.random() * 100}%`;
  const y = `${Math.random() * 100}%`;

  return (
    <StyledStar
      $size={size}
      $delay={delay}
      $duration={duration}
      $x={x}
      $y={y}
    />
  );
};

export const NotFound: FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <NotFoundContainer className='not-found-container'>
      <NotFoundContentWrapper className='not-found-content'>
        <NotFoundTitle className='not-found-title'>
          <Digit delay='0s'>4</Digit>
          <Digit delay='0.1s'>0</Digit>
          <Digit delay='0.2s'>4</Digit>
        </NotFoundTitle>

        <NotFoundText className='not-found-text'>
          Oops! The page got lost in space.
          <DotsWrapper className='dots'>
            <Dot className='dot'>.</Dot>
            <Dot className='dot'>.</Dot>
            <Dot className='dot'>.</Dot>
          </DotsWrapper>
        </NotFoundText>

        <HomeButton
          onClick={handleButtonClick}
          className='not-found-button'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HomeButtonText>Go Home</HomeButtonText>
          {isHovered && <ButtonArrow className='button-arrow'>→</ButtonArrow>}
        </HomeButton>
      </NotFoundContentWrapper>

      <StarsContainer className='floating-stars'>
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            index={i}
          />
        ))}
      </StarsContainer>
    </NotFoundContainer>
  );
};
