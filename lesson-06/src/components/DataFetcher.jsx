import { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetcher() {
  const [data, setData] = useState([]);

  function fetchTodos() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Запрос завершен");
      });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

/*
POST

* Создание новой сущности


PUT vs PATCH

* Обновление существующей сущности

PUT - полное обновление сущности

PATCH - частичное обновление сущности


student: {
    year: 1990,
    name: 'Ivan',
    surname: 'Ivanov'
}

PUT {
    year: 1991,
    name: 'Ivan',
    surname: 'Ivanov'
}

PATCH {
    year: 1991
    }

*/

// DELETE api.mysite.com/api/v1/students
