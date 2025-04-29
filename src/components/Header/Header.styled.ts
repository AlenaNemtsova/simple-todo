import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Theme } from '../../models/themes';

export const HeaderBlock = styled.header<{ theme: Theme }>`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//styled-components автоматически добавляет класс active к активной ссылке
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  font-size: 24px;
  color: #fff;

  &.active {
    color: rgba(255, 255, 255, 0.4);
  }
`;
// Если нужно кастомное условие для активного состояния:
// export const StyledNavLink = styled(NavLink).attrs({
//   className: ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : ''),
// })` /* стили */ `

export const HeaderButtonWrapper = styled.div`
  margin-left: auto;
`;

export const HeaderButton = styled.button`
  padding: 8px 16px;
  font-size: 12px;
  background-color: #edf1f2;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: transform 0.1s;
  touch-action: manipulation;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;
