import { useState } from "react";

export default function NotesItem({ note }) {
  const [isDone, setIsDone] = useState(note.isDone);

  function handleChange() {
    setIsDone(!isDone);
  }

  return (
    <li>
      <p>{note.text}</p>
      <input type="checkbox" checked={isDone} onChange={handleChange} />
    </li>
  );
}
