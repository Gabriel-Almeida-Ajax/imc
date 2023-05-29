import { Button } from "./Button";
import { Input } from "./Input";
import { Result } from "./Result";
import { Title } from "./Title";

export const Form = () => {
  return (
    <div className="form-container">
      <Title />
      <Input id="nome" title="Nome" />
      <Input id="weigth" title="Peso (Kg)" />
      <Input id="height" title="Altura (cm)" />
      <Button text="Calcular" action="CALCULATE" />
      <Result />
    </div>
  );
};
