import { connect, useSelector } from "react-redux";
import { depositMoney, resetMoney, withdrawMoney } from "../actions/actions";

function Balance({ balance, depositMoney, withdrawMoney, resetMoney }) {
  return (
    <div>
      <h2>Balance: ${balance}</h2>
      <button onClick={() => depositMoney(1)}>Deposit 1</button>
      <button onClick={() => depositMoney(5)}>Deposit 5</button>
      <button onClick={() => depositMoney(10)}>Deposit 10</button>
      <button onClick={() => depositMoney(100)}>Deposit 100</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw 100</button>
      <button onClick={resetMoney}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.balance,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    depositMoney: (amount) => dispatch(depositMoney(amount)),
    withdrawMoney: (amount) => dispatch(withdrawMoney(amount)),
    resetMoney: () => dispatch(resetMoney()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
