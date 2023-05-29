import { useSelector } from "../context/app";
import { AppReducer } from "../context/app.reducer";

interface ButtonProps {
  text: string;
  action: keyof typeof AppReducer;
}

export const Button = ({ text, action }: ButtonProps) => {
  const [, dispatch] = useSelector<number>((state) => state.imc);

  const onClick = () => {
    dispatch({
      type: action
    });
  };

  return (
    <div className="button-container">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
