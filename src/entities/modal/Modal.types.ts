import {Dispatch, PropsWithChildren, SetStateAction} from "react";

export type TModalClose = any;

export interface IModalProps<T extends TModalClose> extends PropsWithChildren {
  onClose: Dispatch<SetStateAction<T>>;
}