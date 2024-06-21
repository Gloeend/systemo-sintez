import {clsx} from "clsx";
import c from "./style.module.scss";
import {FC} from "react";
import {IDiceProps} from "@entities/dice/Dice.types.ts";

export const Dice: FC<IDiceProps> = ({side}) => {

  return (
    <div className={c.dice} data-side={side}>
      <div className={clsx(c.sides, c["side-1"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
      </div>
      <div className={clsx(c.sides, c["side-2"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
        <span className={clsx(c.dot, c["dot-2"])}></span>
      </div>
      <div className={clsx(c.sides, c["side-3"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
        <span className={clsx(c.dot, c["dot-2"])}></span>
        <span className={clsx(c.dot, c["dot-3"])}></span>
      </div>
      <div className={clsx(c.sides, c["side-4"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
        <span className={clsx(c.dot, c["dot-2"])}></span>
        <span className={clsx(c.dot, c["dot-3"])}></span>
        <span className={clsx(c.dot, c["dot-4"])}></span>
      </div>
      <div className={clsx(c.sides, c["side-5"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
        <span className={clsx(c.dot, c["dot-2"])}></span>
        <span className={clsx(c.dot, c["dot-3"])}></span>
        <span className={clsx(c.dot, c["dot-4"])}></span>
        <span className={clsx(c.dot, c["dot-5"])}></span>
      </div>
      <div className={clsx(c.sides, c["side-6"])}>
        <span className={clsx(c.dot, c["dot-1"])}></span>
        <span className={clsx(c.dot, c["dot-2"])}></span>
        <span className={clsx(c.dot, c["dot-3"])}></span>
        <span className={clsx(c.dot, c["dot-4"])}></span>
        <span className={clsx(c.dot, c["dot-5"])}></span>
        <span className={clsx(c.dot, c["dot-6"])}></span>
      </div>
    </div>
  )
}