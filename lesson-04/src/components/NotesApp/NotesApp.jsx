import { useState } from "react";

import NotesForm from "./NoteForm";
import NotesList from "./NoteList";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  function addNote(noteText) {
    const newNote = {
      id: Date.now(),
      text: noteText,
      isDone: false,
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <NotesForm addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}
