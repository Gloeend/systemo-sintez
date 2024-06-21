import {Dispatch, FC, SetStateAction} from "react";
import {IAuthProps, TAuthModalVariations} from "@entities/auth/Auth.types.ts";
import {Modal} from "@entities/modal";
import {Login} from "@entities/auth/ui/login";
import {Registration} from "@entities/auth/ui/registration";
import {TModalClose} from "@entities/modal/Modal.types.ts";

export const Auth: FC<IAuthProps<TAuthModalVariations>> = ({type, onClose}) => {
  return <Modal onClose={onClose as Dispatch<SetStateAction<TModalClose>>}>
    {type === "login" && <Login />}
    {type === "registration" && <Registration/>}
  </Modal>
}