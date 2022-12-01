import PropTypes from 'prop-types';
import {
  FriendListItemStatus,
  FriendListItemAvatar,
  FriendListItemName,
} from 'components/Friends/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => (
  <>
    <FriendListItemStatus isOnline={isOnline}></FriendListItemStatus>
    <FriendListItemAvatar src={avatar} alt="User avatar" width="48" />
    <FriendListItemName>{name}</FriendListItemName>
  </>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
