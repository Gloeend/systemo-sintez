import {useAppDispatch, useAppSelector} from "@app/store/storeHooks.ts";
import {Portal} from "@entities/portal";
import c from "@entities/modal/style.module.scss";
import {clsx} from "clsx";
import {FormInput} from "@features/form";
import {Dispatch, SetStateAction, useState} from "react";
import {Dice} from "@entities/dice";
import {Button} from "@features/button";
import {TDiceSide} from "@entities/dice/Dice.types.ts";
import {calculateRoll} from "@shared/utils/calculateRoll.ts";
import {setBalance} from "@app/store/slices/userSlice.ts";


export type IConditionWin = "1-3" | "4-6" | "Четное" | "Нечетное" | TDiceSide

export const Home = () => {
  const dispatch = useAppDispatch();
  const [conditionWin, setConditionWin] = useState<IConditionWin>();
  const {user, balance: balanceUser} = useAppSelector(store => store.user);
  const [bet, setBet] = useState(1.00);
  const [diceSide, setDiceSide] = useState<TDiceSide>(1);
  const [isRolled, setIsRolled] = useState<boolean>();
  const [isAgain, setIsAgain] = useState(false);
  const [isWin, setIsWin] = useState<boolean>();
  const [sum, setSum] = useState<number>();

  const start = async () => {
    const newDiceSide = Math.floor(Math.random() * 6) + 1 as TDiceSide;
    const {balance: newBalance, win, sum} = calculateRoll(newDiceSide, conditionWin as IConditionWin, bet, balanceUser);
    setIsWin(undefined);
    setIsAgain(false);
    if (diceSide === newDiceSide) {
      setDiceSide(newDiceSide);
      setIsAgain(true);
      setIsWin(win);
      setSum(sum);
      dispatch(setBalance(newBalance))
      return;
    }
    setDiceSide(newDiceSide);
    setIsRolled(false);
    setTimeout(() => {
      setIsRolled(true);
      setSum(sum);
      setIsWin(win);
      dispatch(setBalance(newBalance))
    }, 1000);
  }

  return (
    <section className="flex w-[100vw] justify-center items-center min-h-[calc(100vh-67px)]">
      {!user && <Portal>
        <div className={clsx(c.background, "!z-[10]")}></div>
      </Portal>}
      <div className="mw-[340px] flex flex-col items-center">
        <div className="h-[16px] mb-[7px]">
          {
            isRolled && <p className="font-bold text-[var(--root-color-white)]">Результат броска
              кубика {isAgain && "снова"}: {diceSide}</p>
          }
        </div>
        {
          !user ?
            <p className="font-bold text-[var(--root-color-white)] z-[10] relative mb-[60px] text-center">
              Войдите, чтобы продолжить
            </p> :
            <p className="font-bold text-[var(--root-color-white)] mb-[60px]">
              {isWin !== undefined ? (isWin ? `Вы выиграли ${sum} TND` : "Повезет в следующий раз!") : (!isRolled ? "Играем" : "Сделайте ставку")}
            </p>
        }
        <div className="w-[130px] h-[130px] mb-[50px] flex justify-center items-center">
          <Dice side={diceSide}/>
        </div>
        <FormInput onKeyDown={(event) => {
          if (event.key === 'Backspace' || event.keyCode === 8) {
            return;
          }
          if (/\D/g.test(event.key) || ["e", "E", "+", "-"].includes(event.key)) {
            event.preventDefault();
          }
        }} set={el => setBet(parseInt(el as string))} label="Размер ставки"/>
        <div className="grid grid-cols-2 gap-[8px] w-[100%] my-[8px]">
          <Button onClick={() => setConditionWin("Четное")} checked={conditionWin === "Четное"}>Четное</Button>
          <Button onClick={() => setConditionWin("Нечетное")} checked={conditionWin === "Нечетное"}>Нечетное</Button>
          <Button onClick={() => setConditionWin("1-3")} checked={conditionWin === "1-3"}>От 1 до 3</Button>
          <Button onClick={() => setConditionWin("4-6")} checked={conditionWin === "4-6"}>От 4 до 6</Button>
        </div>
        <Button.WithNumber onNumber={setConditionWin as Dispatch<SetStateAction<TDiceSide>>}
                           checked={typeof conditionWin === "number"} className="mb-[8px]">Конкретное
          число</Button.WithNumber>
        <Button.Secondary disabled={typeof isRolled === "boolean" && !isRolled} onClick={() => start()}>Сделать
          ставку</Button.Secondary>
      </div>
    </section>
  )
}