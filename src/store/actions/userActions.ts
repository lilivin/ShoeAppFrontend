import { User } from "../../types/User";

export type UserAddAction = { type: "ADD_USER"; payload: User };

export const addUser = (user: User): UserAddAction => ({
  type: "ADD_USER",
  payload: user,
});
