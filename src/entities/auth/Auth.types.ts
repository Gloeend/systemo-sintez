import {Dispatch, SetStateAction} from "react";
import {TModalClose} from "@entities/modal/Modal.types.ts";

export interface IAuthProps<T extends TModalClose> {
  type: TAuthModalVariations;
  onClose: Dispatch<SetStateAction<T>>;
}


export type TAuthModalVariations = "login" | "registration" | false;