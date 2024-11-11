import { connect } from "react-redux";
import { deleteNote, setCurrentId } from "../redux/actions";

import styles from "../styles/NoteItem.module.css";
import common from "../styles/Common.module.css";

function NoteItem({ note, deleteNote, setCurrentId }) {
  function handleDeleteNote() {
    deleteNote(note.id);
  }

  function handleEditNote() {
    setCurrentId(note.id);
  }

  return (
    <article className={styles.item}>
      <h2>{note.title}</h2>
      {/* <p>{note.content}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: note.content,
        }}
      />
      <div className={styles.button_container}>
        <button className={common.button} onClick={handleEditNote}>
          Edit
        </button>
        <button
          className={common.button + " " + styles.delete_button}
          onClick={handleDeleteNote}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
    setCurrentId: (id) => dispatch(setCurrentId(id)),
  };
}

export default connect(null, mapDispatchToProps)(NoteItem);
