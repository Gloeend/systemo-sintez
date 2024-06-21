import {TDiceSide} from "@entities/dice/Dice.types.ts";
import {IConditionWin} from "@pages/home/Home.tsx";

interface ICalculateRollResult {
  balance: number;
  win: boolean;
  sum: number;
}

export function calculateRoll(dice: TDiceSide, userCondition: IConditionWin, bet: number, balance: number): ICalculateRollResult {
  const even = (dice % 2) === 0 ? "Четное" : "Нечетное";
  if (dice === userCondition) return {
    win: true,
    balance: (balance - bet) + bet * 3,
    sum: (bet * 3) - bet
  };
  if (userCondition === even) return {
    win: true,
    balance: (balance - bet) + bet * 2,
    sum: (bet * 2) - bet
  };
  if ((userCondition === "1-3" && dice <= 3) || (userCondition === "4-6" && dice >= 4)) return {
    win: true,
    balance: (balance - bet) + bet * 2,
    sum: (bet * 2) - bet
  };
  return {
    win: false,
    balance: balance - bet,
    sum: bet
  }
}