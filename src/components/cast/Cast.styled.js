import styled from 'styled-components';

export const CastWrap = styled.div``;
export const CastSubWrap = styled.div``;
export const CastText = styled.p``;
export const CastTitle = styled.h3``;
export const PosterMovie = styled.img`
  width: 50%;
  height: 70%;
  border-radius: 8px;
  object-fit: fill;
  object-position: center;
  transform: scale(1);
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.18);
    transition: transform 250ms linear;
  }
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 20px;
`;

export const CastItem = styled.li`
  width: 20vw;
  text-align: center;
  padding-top: 20px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: wheat;
  transition: background-color 250ms linear;
  &:hover {
    background-color: gray;
    transition: background-color 250ms linear;
  }
`;
