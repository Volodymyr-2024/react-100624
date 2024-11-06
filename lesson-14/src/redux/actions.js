export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const SET_CURRENT_ID = "SET_CURRENT_ID";
export const RESET_CURRENT_ID = "RESET_CURRENT_ID";

/*
Action anatomy:
{
  type: "Какой-то уникальный тип",
  payload: "Какие-то данные. Опционально"
}
*/

export function addNote(title, content) {
  return {
    type: ADD_NOTE,
    payload: {
      title,
      content,
    },
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export function updateNote(id, title, content) {
  return {
    type: UPDATE_NOTE,
    payload: {
      id,
      title,
      content,
    },
  };
}

export function setCurrentId(id) {
  return {
    type: SET_CURRENT_ID,
    payload: id,
  };
}

export function resetCurrentId() {
  return {
    type: RESET_CURRENT_ID,
  };
}
