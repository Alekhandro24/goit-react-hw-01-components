import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  HederRow,
  ColumnHeader,
  ValuesRow,
  TransactionData,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <TransactionHistoryTable>
    <HederRow>
      <ValuesRow>
        <ColumnHeader>Type</ColumnHeader>
        <ColumnHeader>Amount</ColumnHeader>
        <ColumnHeader>Currency</ColumnHeader>
      </ValuesRow>
    </HederRow>

    <tbody>
      {items.map(item => (
        <ValuesRow key={item.id}>
          <TransactionData>{item.type}</TransactionData>
          <TransactionData>{item.amount}</TransactionData>
          <TransactionData>{item.currency}</TransactionData>
        </ValuesRow>
      ))}
    </tbody>
  </TransactionHistoryTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
