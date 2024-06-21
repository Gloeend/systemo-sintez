import {ChangeEvent, FC, useState} from "react";
import c from "./style.module.scss";
import {IFormInputProps} from "@features/form/ui/form-input/FormInput.types.ts";
import {clsx} from "clsx";

export const FormInput: FC<IFormInputProps> = (props) => {
  const {className, error, onKeyDown, placeholder, label, set: setState} = props;
  const [value, set] = useState<string>("");

  const emit = (ev: ChangeEvent<HTMLInputElement>) => {
    const {value} = ev.currentTarget;
    set(value);
    setState(value);
  }

  return <label className={clsx(className, c.label, error && c.error)}>
    {label && <span>{label}</span>}
    <input onKeyDown={onKeyDown} placeholder={placeholder} className={c.input} onChange={ev => emit(ev)} value={value}/>
    {typeof error === "string" && <span>{error}</span>}
  </label>
}