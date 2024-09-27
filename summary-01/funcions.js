// 1. Обычная функция (Function Declaration)
function greet(name) {
  return `Привет, ${name}!`;
}
console.log(greet("Иван"));

// 2. Функциональное выражение (Function Expression)
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4));

// 3. Стрелочная функция (Arrow Function)
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

console.log((a, b) => (a * b)(2, 5));

const multiply2 = (a, b) => {
  return a * b;
};

// 3.1. Стрелочная функция с одним параметром и одним выражением
const square = (x) => x * x;
console.log(square(5)); // 25

const square2 = (x) => x * x;

// 3.2. Стрелочная функция с несколькими параметрами
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 3.3. Стрелочная функция без параметров
const sayHello = () => console.log("Привет!");
sayHello(); // Привет!

// 3.4. Стрелочная функция с телом в фигурных скобках (явное возвращение)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(3, 4)); // 12

// 3.5. Стрелочная функция, возвращающая объект
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Иван", 30)); // { name: "Иван", age: 30 }

// 3.6. Стрелочная функция с колбэком
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// 3.7. Асинхронная стрелочная функция
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
};

// 4. Функция с параметром по умолчанию (Default Parameters)
function greetWithDefault(name = "Гость") {
  return `Привет, ${name}!`;
}
console.log(greetWithDefault());
console.log(greetWithDefault("Алексей"));

// 5. Функция высшего порядка (Higher Order Function)
function higherOrder(fn, x, y) {
  return fn(x, y);
}
const subtract = (a, b) => a - b;
console.log(higherOrder(subtract, 10, 5));

const arr1 = ["a", "b", "c"];
const arr2 = arr1.map((item) => item.toUpperCase()); // ["A", "B", "C"]

const reactArr = arr1.map((item) => {
  return <li>{item}</li>;
}); // [<li>a</li>, <li>b</li>, <li>c</li>]

// 6. Немедленно вызываемая функция (IIFE - Immediately Invoked Function Expression)
(function () {
  console.log("Эта функция вызвана немедленно!");
})();

// Асинхронная IIFE
(async function () {
  console.log("Эта асинхронная функция вызвана немедленно!");
})();

// 7. Рекурсивная функция (Recursive Function)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 8. Замыкание (Closure)
function outerFunction(outerValue) {
  return function innerFunction(innerValue) {
    return outerValue + innerValue;
  };
}
const closureExample = outerFunction(10);
console.log(closureExample(5));

// 9. Функция с колбэком (Callback Function)
function fetchData(callback) {
  setTimeout(() => {
    callback("Данные получены");
  }, 1000);
}
fetchData((data) => {
  console.log(data);
});

// 10. Асинхронная функция (Async Function) с использованием промисов
async function fetchDataAsync() {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve("Асинхронные данные получены"), 1000);
  });
  console.log(data);
}
fetchDataAsync();

// 11. Композиция функций (Function Composition)
const compose = (f, g) => (x) => f(g(x));
const double = (x) => x * 2;
const square = (x) => x * x;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // Сначала удваиваем 3, затем возводим в квадрат: (3 * 2)^2 = 36

// 12. Каррирование (Currying)
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const curriedResult = curryAdd(2)(3)(4);
console.log(curriedResult);

// 13. Генератор (Generator Function)
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
