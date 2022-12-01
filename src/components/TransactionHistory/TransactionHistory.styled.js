import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const HederRow = styled.thead`
  font-size: 1.5rem;
  text-align: center;
`;

export const ColumnHeader = styled.th`
  width: 30%;
  padding: 1rem 5rem;
  background-color: #02bbd7;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;

  &:first-child {
    border-radius: 0.5rem 0 0 0;
  }

  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }
`;

export const ValuesRow = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;

  &:first-child {
    border-radius: 0 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0 0 0.5rem;
  }

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionData = styled.td`
  &:first-child {
    border-radius: 0 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0;
  }
`;

// export const StatListItemNoTitle = styled.li``;
