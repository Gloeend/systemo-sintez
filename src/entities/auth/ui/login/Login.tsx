import {FormInput} from "@features/form";
import {FormEvent, useState} from "react";
import {Button} from "@features/button";
import {useLoginMutation} from "@app/store/api/auth.api.ts";
import {useAppDispatch} from "@app/store/storeHooks.ts";
import {setUser} from "@app/store/slices/userSlice.ts";
import {useModalContext} from "@entities/modal";
import {useCookies} from "react-cookie";

export const Login = () => {
  const [_, setCookie] = useCookies();
  const {onClose} = useModalContext();
  const [login, setLogin] = useState<string>("");
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>("");
  const [send, {isError, error}] = useLoginMutation();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const {data} = await send({
      login: login,
      password: password
    });
    if (!data) return;
    dispatch(setUser(data));
    setCookie("user", data);
    onClose(false);
  }

  return <form className="flex flex-col gap-[16px]" onSubmit={(e) => submit(e)}>
    <FormInput error={isError ? true : undefined} placeholder="Login" set={setLogin}/>
    <FormInput error={
      // @ts-ignore
      isError && error.data.message
    } placeholder="Password" type="password" set={setPassword}/>
    <Button>Войти</Button>
  </form>
}