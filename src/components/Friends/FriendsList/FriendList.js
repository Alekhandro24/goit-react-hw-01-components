import PropTypes from 'prop-types';
import { FriendListItem } from 'components/Friends/FriendListItem/FriendListItem';
import {
  FriendListUl,
  FriendListLi,
} from 'components/Friends/FriendsList/FriendList.styled.js';

export const FriendList = ({ friends }) => (
  <FriendListUl>
    {friends.map(friend => (
      <FriendListLi key={friend.id}>
        <FriendListItem friend={friend} />
      </FriendListLi>
    ))}
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
