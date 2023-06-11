import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageNav = styled.nav`
  font-size: 24px;
  text-decoration: none;
  border-bottom: 1px solid black;
  background-color: gray;
  padding: 10px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 10px;
  color: black;
  transition: color 250ms linear;
  &.active {
    color: tomato;
    text-decoration: none;
    margin-right: 10px;
  }
  &:hover {
    color: blue;
    transition: color 250ms linear;
  }
`;
