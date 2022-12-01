import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  UserName,
  UserTag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <Description>
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <Location>{location}</Location>
    </Description>

    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  </ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
