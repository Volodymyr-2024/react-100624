import React from "react";
import PrettyButton from "./components/PrettyButton/PrettyButton.jsx";
import "./button.css";

function App() {
  return (
    <div>
      <h1>Lesson 03 - CSS и хук useState</h1>
      <section>
        <h2>CSS</h2>
        <ul>
          <li>Стилизация компонентов с помощью CSS-классов</li>
          <li>Стилизация компонентов с помощью inline стилей</li>
          <li>Стилизация компонентов с помощью CSS-модулей</li>
        </ul>

        <h3>CSS-классы</h3>
        <p>Стратегия именования классов</p>
        <ul>
          <li>
            <a href="https://ru.bem.info/methodology/">БЭМ</a>
          </li>
          <li>Atomic CSS</li>
          <li>SMACSS (Scalable and Modular Architecture for CSS)</li>
          <li>OOCSS (Object-Oriented CSS)</li>
        </ul>
        <button className="coolButton">Кнопка с классом coolButton</button>

        <h3>Inline-стили</h3>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Я кнопка с inline-стилями
        </button>

        <h3>CSS Modules</h3>
        <PrettyButton text="I'm a pretty button" />
      </section>
    </div>
  );
}

export default App;
