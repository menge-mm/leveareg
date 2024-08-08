import { createContext, useContext, useReducer } from "react";

const initialModalState = {
  open: false,
  resourceType: "",
  index: -1,
  multiple: true,
  actionName: "",
};

const ModalContext = createContext<{
  state: typeof initialModalState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialModalState,
  dispatch: () => null,
});

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        open: true,
        resourceType: action.payload.resourceType,
        multiple: action.payload.multiple,
        actionName: action.payload.actionName,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        open: false,
        resourceType: "",
        multiple: true,
        actionName: "",
      };
    default:
      return state;
  }
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }
  return context;
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialModalState);
  return <ModalContext.Provider value={{ state, dispatch }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
