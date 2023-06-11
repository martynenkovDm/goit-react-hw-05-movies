import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailTitle = styled.h1``;
export const MovieDetailSubTitle = styled.h2``;
export const MovieDetailText = styled.p``;
export const MoreInfoLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding-left: 0px;
`;
export const MoreInfoLinksItem = styled.li``;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid black;
  background-color: lightblue;
  text-decoration: none;
  border-radius: 10px;
  color: black;
  &:hover {
    color: tomato;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px;
  margin: 10px 0px 10px 10px;
  border: 1px solid black;
  background-color: lightblue;
  text-decoration: none;
  border-radius: 10px;
  color: black;

  &:hover {
    color: tomato;
  }
`;
export const MovieDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const MovieDetailSubWrapper = styled.div`
  height: 60vh;
`;
export const PosterMovie = styled.img`
  width: 500px;
  height: 100%;
  border-radius: 18px;
  object-position: center;
  padding-left: 10px;
`;
