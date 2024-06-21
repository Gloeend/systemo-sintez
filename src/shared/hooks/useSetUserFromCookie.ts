import {useCookies} from "react-cookie";
import {useAppDispatch} from "@app/store/storeHooks.ts";
import {setUser} from "@app/store/slices/userSlice.ts";
import {useEffect} from "react";

export const useSetUserFromCookie = () => {
  const [cookies] = useCookies(['user']);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(cookies.user));
  }, []);
}