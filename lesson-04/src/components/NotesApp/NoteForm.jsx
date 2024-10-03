import { useState } from "react";

export default function NotesForm({ addNote }) {
  const [noteText, setNoteText] = useState("");

  function handleChange(e) {
    setNoteText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (noteText.trim() === "") {
      return;
    }

    addNote(noteText);
    setNoteText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={handleChange}
        placeholder="Введите текст заметки"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
