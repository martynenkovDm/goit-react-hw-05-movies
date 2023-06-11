import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const MoviesList = styled.ul`
  list-style: none;
  height: 100%;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`;
