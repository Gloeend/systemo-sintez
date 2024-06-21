import {MouseEvent, useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@features/button";
import {TAuthModalVariations} from "@entities/auth/Auth.types.ts";
import {Auth} from "@entities/auth";
import {useAppSelector} from "@app/store/storeHooks.ts";

export const Header = () => {
  const {user} = useAppSelector(store => store.user);
  const [modal, set] = useState<TAuthModalVariations>(false);

  const openModal = useCallback((event: MouseEvent<HTMLButtonElement>, type: TAuthModalVariations) => {
    event.stopPropagation();
    set(type);
  }, []);

  return (
    <header className="w-[100%] flex justify-between px-[24px] py-[10px] items-center relative z-[10] h-[67px]">
      <Link to="" className="font-bold text-[var(--root-color-white)]">Test Game</Link>
      {
        !user ?
          <div className="w-fit flex gap-[8px]">
            <Button onClick={(event: MouseEvent<HTMLButtonElement>) => {
              openModal(event, "login");
            }}>Вход</Button>
            <Button onClick={(event) => {
              openModal(event, "registration");
            }}>Регистрация</Button>
          </div> :
          <p className="text-[var(--root-color-white)]">119 999 911.10 (TND)</p>
      }
      {modal && <Auth type={modal} onClose={set}/>}
    </header>
  )
}