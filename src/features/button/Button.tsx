import {FC, memo, NamedExoticComponent, useEffect, useState} from "react";
import c from "./style.module.scss";
import {IButtonProps, IButtonWithNumberProps} from "@features/button/Button.types.ts";
import {clsx} from "clsx";
import {TDiceSide} from "@entities/dice/Dice.types.ts";

export interface IMemoizedButtonCompose {
  Secondary: typeof ButtonSecondary;
  WithNumber: typeof ButtonWithNumber;
}
const ButtonCompound: FC<IButtonProps> = ({className, checked, children, onClick}) => {
  return <button onClick={onClick} className={clsx(className, c.button, checked && c.checked)}>
    {children}
  </button>
};
const ButtonSecondary: FC<IButtonProps> = memo(({disabled, className, children, onClick}) => {
  return <button disabled={disabled} onClick={onClick} className={clsx(className, c.button, c.secondary)}>
    {children}
  </button>
});
export const Button = memo(ButtonCompound) as NamedExoticComponent<IButtonProps> & IMemoizedButtonCompose;
Button.Secondary = ButtonSecondary;

const ButtonWithNumber: FC<IButtonWithNumberProps> = memo(({className, checked, children, onNumber, }) => {
  const [num, setNumber] = useState<TDiceSide>(1);

  useEffect(() => {
    onNumber(num)
  }, [num]);

  return <button onClick={() => {
    if (!checked) {
      onNumber(num);
      return;
    }
    if (num === 6) {
      setNumber(1);
      return;
    }
    setNumber(num + 1 as TDiceSide);
  }} className={clsx(className, c.button, checked && c.checked, c["with-number"])}>
    {children}
    <span>{num}</span>
  </button>
});
Button.WithNumber = ButtonWithNumber;