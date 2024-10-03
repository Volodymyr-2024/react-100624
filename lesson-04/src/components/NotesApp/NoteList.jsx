import NotesItem from "./NoteItem";

export default function NotesList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <NotesItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
