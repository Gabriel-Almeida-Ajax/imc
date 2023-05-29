import { useSelector } from "../context/app";

export const Result = () => {
  const [value] = useSelector<number>((state) => state.imc);

  if (!value) return <h1 className="title">Informe seus dados</h1>;

  if (value >= 40) return <h1 className="title">Obesidade Grau III</h1>;
  if (value >= 35) return <h1 className="title">Obesidade Grau II</h1>;
  if (value >= 30) return <h1 className="title">Obesidade Grau I</h1>;
  if (value >= 25) return <h1 className="title">Levemente acima do peso</h1>;
  if (value >= 18.5) return <h1 className="title">Peso Ideal</h1>;
  if (value >= 17) return <h1 className="title">Magreza Grau I</h1>;
  if (value >= 16) return <h1 className="title">Magreza Grau II</h1>;
  if (value < 16) return <h1 className="title">Magreza Grau III</h1>;

  return <></>
};
