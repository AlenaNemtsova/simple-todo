// import { NavLink } from 'react-router';
// import classes from './Header.module.scss';
import { HeaderBlock, HeaderContainer, StyledNavLink } from './Header.styled';

export const Header = () => {
  //стиль для обычного NavLink без styled-components:
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   //isActive это объект, поэтому типизируется как объект с полем isActive: boolean
  //   return isActive ? `${classes.link} ${classes.active}` : classes.link;
  // };

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
      </HeaderContainer>
    </HeaderBlock>
  );
};
