const text = "Hello, world!";
const number = 42;
const bool = true;

if (text === "Hello, world!") {
  // Этот блок кода выполнится
}

if (number === 42) {
  // Этот блок кода выполнится
}

if (bool) {
  // Этот блок кода выполнится
}

const arr = [1, 2, 3, 4, 5];
const obj = { key: "value" };
const func = () => {};

if (arr === [1, 2, 3, 4, 5]) {
  // Этот блок кода НЕ выполнится
}
if (obj === { key: "value" }) {
  // Этот блок кода НЕ выполнится
}
if (func === (() => {})) {
  // Этот блок кода НЕ выполнится
}
