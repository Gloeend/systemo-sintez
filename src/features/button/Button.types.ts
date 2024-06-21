import {Dispatch, MouseEvent, SetStateAction} from "react";
import {TDiceSide} from "@entities/dice/Dice.types.ts";

export interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}
export interface IButtonWithNumberProps extends IButtonProps {
  onNumber: Dispatch<SetStateAction<TDiceSide>>;
}