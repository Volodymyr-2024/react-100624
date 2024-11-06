import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SET_CURRENT_ID,
  RESET_CURRENT_ID,
} from "./actions";

const initialState = {
  notes: [
    {
      id: 1,
      title: "First note",
      content: "This is the first note",
    },
    {
      id: 2,
      title: "Second note",
      content: "This is the second note",
    },
    {
      id: 3,
      title: "Third note",
      content: "This is the third note",
    },
    {
      id: 4,
      title: "Fourth note",
      content: "This is the fourth note",
    },
  ],
  currentNoteId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      // Add
      const newState = { ...state };
      newState.notes = [
        ...state.notes,
        {
          id: Date.now(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
      return newState;
    }
    case DELETE_NOTE: {
      // Delete
      const newState = { ...state };
      newState.notes = state.notes.filter((note) => note.id !== action.payload);
      return newState;

      // Альтернативный способ сделать всё в одно выражение
      // return {
      //   ...state,
      //   notes: state.notes.filter((note) => note.id !== action.payload),
      // };
    }
    case UPDATE_NOTE: {
      // Update
      const newState = { ...state };
      newState.notes = state.notes.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note
      );
      return newState;
    }
    case SET_CURRENT_ID: {
      return {
        ...state,
        currentNoteId: action.payload,
      };
    }
    case RESET_CURRENT_ID: {
      return {
        ...state,
        currentNoteId: null,
      };
    }
    default:
      return state;
  }
}
