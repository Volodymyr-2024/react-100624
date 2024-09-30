import React from "react";
import PrettyButton from "./components/PrettyButton/PrettyButton.jsx";
import "./button.css";
import CardsList from "./components/CardsList.jsx";
import Counter from "./components/Counter.jsx";

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  borderRadius: "5px",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
};

const teams = [
  {
    name: "Dragons United",
    members: [
      "David Miller",
      "Ethan Turner",
      "Natalie Clark",
      "Sophie Gomez",
      "Tom Hanks",
    ],
  },
  {
    name: "Golden Eagles",
    members: [
      "Lisa Ray",
      "Harry Ford",
      "Betty Cooper",
      "George King",
      "Alice Morgan",
    ],
  },
  {
    name: "Mighty Warriors",
    members: [
      "Sam Wilson",
      "John Norton",
      "Emma Cartright",
      "Daniel Lewis",
      "Megan Stone",
    ],
  },
  {
    name: "Falcon Flyer",
    members: [
      "Oscar Wilde",
      "Robert Brown",
      "Victoria Smith",
      "Rachel Adams",
      "Matthew Johns",
    ],
  },
  {
    name: "Storm Breakers",
    members: [
      "Lucas White",
      "Eva Taylor",
      "Charles Anderson",
      "Emily Johnson",
      "Aaron Carter",
    ],
  },
];

function App() {
  return (
    <div>
      <Counter />
      <h2>Команды</h2>
      <CardsList teams={teams} />
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
        <button id="cool-button" className="coolButton">
          Кнопка с классом coolButton
        </button>

        <h3>Inline-стили</h3>
        <button style={buttonStyle}>Я кнопка с inline-стилями</button>

        <h3>CSS Modules</h3>
        <PrettyButton text="I'm a pretty button" />
      </section>
    </div>
  );
}

export default App;
