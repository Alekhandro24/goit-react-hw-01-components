import styled from 'styled-components';

export const FriendListItemStatus = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const FriendListItemAvatar = styled.img`
  margin: 0 auto;
`;
export const FriendListItemName = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;

// export const StatListItemNoTitle = styled.li``;
