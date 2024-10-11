// Lesson: Promises in JavaScript

// 1. Введение в Promises
// -----------------------
// Promise (обещание) — это объект, который представляет собой завершение
// (или неудачу) асинхронной операции и результат этой операции.

// Пример синхронного кода:
console.log("Синхронный код начинается");
console.log("Синхронный код завершается");

// Пример асинхронного кода с setTimeout:
console.log("Асинхронный код начинается");
setTimeout(() => {
  console.log("Этот код выполнится через 2 секунды");
}, 2000);
console.log("Асинхронный код продолжается");

// Проблема: Как дождаться завершения асинхронной операции?
// Ответ: Использовать Promises.

// 2. Создание Promise
// --------------------
// Promise создается с помощью конструктора `new Promise()`, который принимает
// функцию с двумя аргументами: `resolve` и `reject`. `resolve` вызывается при
// успешном завершении операции, а `reject` — при ошибке.

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Операция выполнена успешно!");
  } else {
    reject("Операция завершилась ошибкой.");
  }
});

// 3. Использование Promise
// -------------------------
// Для обработки завершения Promise используется метод `.then()` для успешного
// результата и `.catch()` для обработки ошибок.

myPromise
  .then((result) => {
    console.log(result); // "Операция выполнена успешно!"
  })
  .catch((error) => {
    console.error(error); // "Операция завершилась ошибкой."
  });

// Async IIFE (Immediately Invoked Function Expression)

(async () => {
  try {
    const myResult = await myPromise;
  } catch (error) {
    console.error(error);
  }
})();

// 4. Пример реального использования Promise
// ------------------------------------------
// Допустим, мы делаем запрос на сервер. Для этого может использоваться `fetch`.

console.log("Начало запроса данных...");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Данные получены:", data);
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });

// 5. Цепочка Promises
// -------------------
// Один из главных плюсов Promises — возможность связывать несколько асинхронных
// операций в цепочку.

const promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promiseChain
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

// 6. Promise.all()
// ------------------
// Иногда необходимо дождаться завершения нескольких промисов. Для этого
// используется метод `Promise.all()`, который принимает массив промисов и
// возвращает новый Promise, который выполнится, когда все промисы завершатся.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "two"));
const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [3, "two", { данные ответа }]
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

// 7. Promise.race()
// ------------------
// `Promise.race()` возвращает первый завершившийся Promise, неважно, успешный он или нет.

const slowPromise = new Promise((resolve) =>
  setTimeout(resolve, 3000, "Slow Promise")
);
const fastPromise = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Fast Promise")
);

Promise.race([slowPromise, fastPromise]).then((result) => {
  console.log(result); // "Fast Promise"
});

// 8. Async/Await - современный синтаксис работы с Promises
// --------------------------------------------------------
// Синтаксис `async` и `await` позволяет работать с промисами более элегантно.

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/3"
    );
    const data = await response.json();
    console.log("Данные с использованием async/await:", data);
  } catch (error) {
    console.error("Ошибка в async/await:", error);
  }
}

fetchData();

// Заключение:
// ------------
// Promises являются мощным инструментом для работы с асинхронными операциями.
// С ними можно легко управлять цепочками операций, обрабатывать ошибки и
// синхронизировать несколько запросов. С появлением async/await код стал более
// читабельным и простым для понимания.
