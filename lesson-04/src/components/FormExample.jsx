import { useState } from "react";

export default function FormExample() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Имя - обязательное поле");
    } else {
      setError("");
      alert(`Привет, ${name}!`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Форма</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ведите ваше имя"
      />
      <input type="password" pattern="[a-z]{4,8}" required />
      <button type="submit">Отправить</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
