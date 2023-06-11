import styled from 'styled-components';

export const ReviewWrap = styled.div`
  display: block;
`;
export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ReviewItem = styled.li`
  border: 1px solid gray;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: wheat;
  transition: background-color 250ms linear;
  &:hover {
    background-color: gray;
    transition: background-color 250ms linear;
  }
`;
export const ReviewTitle = styled.h3``;
export const ReviewText = styled.p``;
