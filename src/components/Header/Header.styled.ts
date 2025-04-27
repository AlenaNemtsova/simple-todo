import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Theme } from '../../models/themes';

export const HeaderBlock = styled.header<{ theme: Theme }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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
  position: relative;
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
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeaderButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #edf1f2;
  border: none;
  border-radius: 5px;
  outline: none;
`;
