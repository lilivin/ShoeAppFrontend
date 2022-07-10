export type NotesAction = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): NotesAction => ({
  type: "ADD_NOTE",
  payload: note,
});
