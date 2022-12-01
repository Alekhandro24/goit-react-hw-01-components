import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 40%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const Avatar = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 50%;
  border: 5px dotted black;
`;

export const UserName = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const UserTag = styled.p`
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
`;

export const Location = styled.p`
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
`;

export const StatsLabel = styled.span`
  padding-bottom: 0.5rem;
  color: #8a8b8e;
`;

export const StatsQuantity = styled.span`
  font-weight: bold;
  border-radius: 0.5rem;
`;
