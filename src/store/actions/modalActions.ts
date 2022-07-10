import { SingleShoes } from "../../types/Shoes";

export type ModalHiddenAction = { type: "SET_HIDDEN_MODE" };
export type ModalEditAction = { type: "SET_EDIT_MODE" };
export type ModalAddAction = { type: "SET_ADD_MODE" };

export const hideModal = (): ModalHiddenAction => ({
  type: "SET_HIDDEN_MODE"
});

export const editModal = (): ModalEditAction => ({
  type: "SET_EDIT_MODE"
});

export const addModal = (): ModalAddAction => ({
  type: "SET_ADD_MODE"
});

