import {Dispatch, SetStateAction} from "react";

export interface IFormCheckboxProps {
  children: string;
  setState: Dispatch<SetStateAction<boolean>>
}