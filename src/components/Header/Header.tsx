// import { NavLink } from 'react-router';
// import classes from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { toggleThemeAction } from '../../features/themeList';
import {
  HeaderBlock,
  HeaderContainer,
  StyledNavLink,
  HeaderButtonWrapper,
  HeaderButton,
} from './Header.styled';
import { useState } from 'react';

export const Header = () => {
  //стиль для обычного NavLink без styled-components:
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   //isActive это объект, поэтому типизируется как объект с полем isActive: boolean
  //   return isActive ? `${classes.link} ${classes.active}` : classes.link;
  // };
  const dispatch = useDispatch();

  return (
    <HeaderBlock>
      <HeaderContainer>
        <StyledNavLink
          to='/'
          // className={getActiveClass}
        >
          ToDo
        </StyledNavLink>
        <StyledNavLink
          to='/list'
          // className={getActiveClass}
        >
          List
        </StyledNavLink>

        <HeaderButtonWrapper>
          <HeaderButton onClick={() => dispatch(toggleThemeAction())}>TOGGLE THEME</HeaderButton>
        </HeaderButtonWrapper>
      </HeaderContainer>
    </HeaderBlock>
  );
};
