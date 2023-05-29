import { useRef, useState } from "react";
import { useSelector } from "../context/app";

interface InputProps {
  id: string;
  title: string;
}

export const Input = ({ title, id }: InputProps) => {
  const [value, dispatch] = useSelector((state) => state[id]);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    setOpen(true);
    ref.current?.focus();
  };

  return (
    <div className={`input-container ${open ? "open" : ""}`} onClick={onClick}>
      <label onClick={onClick} htmlFor={id}>
        {title}
      </label>
      <input
        defaultValue={value}
        onChange={(event) =>
          dispatch({
            type: "CHANGE_FIELD",
            payload: {
              field: id,
              value: event.target.value
            }
          })
        }
        onFocus={() => setOpen(true)}
        ref={ref}
        id={id}
      />
    </div>
  );
};
