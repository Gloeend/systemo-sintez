import {FC, useState} from "react";
import c from "./style.module.scss";
import {IFormCheckboxProps} from "@features/form/ui/form-checkbox/FormCheckbox.types.ts";
import {clsx} from "clsx";

export const FormCheckbox: FC<IFormCheckboxProps> = ({children, setState}) => {
  const [active, set] = useState<boolean>(false);

  const emit = () => {
    setState(!active)
    set(!active);
  }

  return <button type="button" className={active ? clsx(c.checkbox, c.active) : c.checkbox} onClick={emit}>
    {children}
  </button>
}