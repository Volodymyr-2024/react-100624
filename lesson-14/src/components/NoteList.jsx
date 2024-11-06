import { connect } from "react-redux";

import styles from "../styles/NoteList.module.css";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NoteList);
