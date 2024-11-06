import { useEffect, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";

import styles from "../styles/NoteForm.module.css";
import common from "../styles/Common.module.css";
import { addNote, updateNote, resetCurrentId } from "../redux/actions";

function AddNoteForm({ addNote }) {
  function handleAddNote(event) {
    event.preventDefault();
    const title = event.target.title.value.trim();
    const content = event.target.content.value.trim();

    if (title && content) {
      addNote(title, content);
    }

    event.target.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleAddNote}>
      <label className={styles.label}>
        Title
        <input type="text" name="title" required />
      </label>
      <label className={styles.label}>
        Content
        <textarea name="content" required />
      </label>
      <button className={common.button} type="submit">
        Add note
      </button>
    </form>
  );
}

function EditNoteForm({
  currentNoteId,
  updateNote,
  resetCurrentId,
  currentNote,
}) {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContent] = useState(currentNote.content);

  const inputRef = useRef(null);

  function handleEditNote(e) {
    e.preventDefault();
    updateNote(currentNoteId, title, content);
    resetCurrentId();
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [currentNote]);

  useEffect(() => {
    setTitle(currentNote.title);
    setContent(currentNote.content);
  }, [currentNote]);

  return (
    <form className={styles.form} onSubmit={handleEditNote}>
      <label className={styles.label}>
        Title
        <input
          ref={inputRef}
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
          autoFocus
        />
      </label>
      <label className={styles.label}>
        Content
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
      </label>
      <button className={common.button} type="submit">
        Update note
      </button>
    </form>
  );
}

function NoteForm({
  currentNoteId,
  notes,
  addNote,
  updateNote,
  resetCurrentId,
}) {
  if (currentNoteId) {
    return (
      <EditNoteForm
        currentNoteId={currentNoteId}
        currentNote={notes.find((note) => note.id === currentNoteId)}
        updateNote={updateNote}
        resetCurrentId={resetCurrentId}
      />
    );
  }

  return <AddNoteForm addNote={addNote} />;
}

function mapStateToProps(state) {
  return {
    currentNoteId: state.currentNoteId,
    notes: state.notes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: (title, content) => {
      dispatch(addNote(title, content));
    },
    updateNote: (id, title, content) => {
      dispatch(updateNote(id, title, content));
    },
    resetCurrentId: () => {
      dispatch(resetCurrentId());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
