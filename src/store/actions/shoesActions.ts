import { SingleShoes } from "../../types/Shoes";
export type ShoesAddAction = { type: "ADD_SHOES"; payload: SingleShoes };
export type ShoesArrayAddAction = { type: "ADD_SHOES_ARRAY"; payload: SingleShoes[] };
export type ShoesRemoveAction = { type: "REMOVE_SHOES"; payload: string };
export type ShoesUpdateAction = { type: "UPDATE_SHOES"; payload: SingleShoes };

export const addShoes = (shoes: SingleShoes): ShoesAddAction => ({
  type: "ADD_SHOES",
  payload: shoes,
});

export const addShoesArray = (shoesArray: SingleShoes[]): ShoesArrayAddAction => ({
  type: "ADD_SHOES_ARRAY",
  payload: shoesArray,
});

export const removeShoes = (id: string): ShoesRemoveAction => ({
  type: "REMOVE_SHOES",
  payload: id,
});

export const updateShoes = (shoes: SingleShoes): ShoesUpdateAction => ({
  type: "UPDATE_SHOES",
  payload: shoes,
});
