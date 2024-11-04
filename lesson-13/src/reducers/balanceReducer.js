import { DEPOSIT, WITHDRAW, RESET } from "../actions/actions";

const initialState = {
  balance: 0,
};

// DEPOSIT - Увеличить баланс на сумму
// WITHDRAW - Уменьшить баланс на сумму
// RESET - Установить баланс на 0

export function balanceReducer(state = initialState, action) {
  switch (action.type) {
    // Пример - Action - {  type: 'DEPOSIT', payload: 100 }
    case DEPOSIT:
      return {
        balance: state.balance + action.payload,
      };
    case WITHDRAW:
      // Пример - Action - {  type: 'WITHDRAW', payload: 100 }
      if (state.balance < action.payload) {
        return state;
      }
      return {
        balance: state.balance - action.payload,
      };
    case RESET:
      // Пример - Action - {  type: 'RESET' }
      return {
        balance: 0,
      };
    default:
      return state;
  }
}
