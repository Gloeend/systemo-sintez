import {DetailedHTMLProps, Dispatch, InputHTMLAttributes, KeyboardEvent, SetStateAction} from "react";

export interface IFormInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  set: Dispatch<SetStateAction<string>>;
  label?: string;
  className?: string;
  placeholder?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  error?: string | true;
}