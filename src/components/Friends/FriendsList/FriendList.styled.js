import styled from 'styled-components';

export const FriendListUl = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const FriendListLi = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;
