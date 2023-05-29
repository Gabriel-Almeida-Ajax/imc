import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from "react";
import { AppReducer, reducer } from "./app.reducer";

type Context = [
  any,
  Dispatch<{
    type: keyof typeof AppReducer;
    payload?: any;
  }>
];

const AppContext = createContext<Context | any>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const initialState = {
    history: [],
    nome: "",
    weigth: 0,
    height: 0,
    imc: 0
  };

  const [context, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[context, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export function useSelector<T>(callback?: (state: any) => T): [T, Context[1]] {
  const context = useContext(AppContext);
  if (typeof callback !== "function") return context;
  return [callback(context[0]), context[1]];
}
