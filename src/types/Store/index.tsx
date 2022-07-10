import { ModalState } from "../Modal";
import { NotesState } from "../Notes";
import { ShoesState } from "../Shoes";
import { User } from "../User";

export interface Store {
    notesReducer: NotesState,
    shoesReducer: ShoesState,
    modalReducer: ModalState,
    userReducer: User
}