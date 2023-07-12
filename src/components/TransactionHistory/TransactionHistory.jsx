// import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory =({items}) => {
  return (
    <table class={css.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
       <tbody>
        {items.map(({type, amount, currency }) => {
          return (
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody> 
    </table>
  );
};
