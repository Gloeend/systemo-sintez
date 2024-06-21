import {
  createContext,
  createRef,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect
} from "react";
import c from "./style.module.scss";
import {IModalProps} from "@entities/modal/Modal.types.ts";
import useOutsideClick from "@shared/hooks/useOutsideClick.ts";
import {SvgClose} from "@shared/icons/ui";
import {Portal} from "@entities/portal";

interface IModalContext {
  onClose: Dispatch<SetStateAction<false>>
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModalContext = () => useContext(ModalContext);
export const Modal = ({children, onClose}: IModalProps<false>) => {
  const ref = createRef<HTMLDivElement>();
  const outside = useOutsideClick(ref);

  useEffect(() => {
    if (outside) onClose(false);
  }, [outside]);

  return <Portal>
    <div className={c.background}></div>
    <div className={c.modal}>
      <div ref={ref} className={c.content}>
        <button className="top-[8px] right-[8px] absolute" onClick={() => onClose(false)}><SvgClose/></button>
        <ModalContext.Provider value={{onClose}}>{children}</ModalContext.Provider>
      </div>
    </div>
  </Portal>
}