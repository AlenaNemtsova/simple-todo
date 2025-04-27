import { Link } from 'react-router';
import styled from 'styled-components';

interface StyledLinkProps {
  $isDone: boolean; // Используем $ префикс для transient prop
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  color: ${({ $isDone }) => ($isDone ? '#4aa83d' : '#a83d49')};
`;
