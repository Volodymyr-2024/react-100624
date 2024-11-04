// { type: "SOME_TYPE", payload: anything }
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const RESET = "RESET";

export function depositMoney(amount) {
  return {
    type: DEPOSIT,
    payload: amount,
  };
}

export function withdrawMoney(amount) {
  return {
    type: WITHDRAW,
    payload: amount,
  };
}

export function resetMoney() {
  return {
    type: RESET,
  };
}
