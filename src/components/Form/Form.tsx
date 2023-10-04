import { Button, Spacer } from "@chakra-ui/react";
import PrimaryInput from "../Input/PrimaryInput";
import { useState } from "react";
import "./form.css";

export function Form() {
  const [email, setEmail] = useState("");
  const [firtName, setFirtName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form>
      <div className="input-name-form-container">
        <PrimaryInput
          value={firtName}
          onChange={handleChange}
          name="firtName"
          label="Digite seu nome"
          placeholder="Seu primeiro nome"
        />
        <PrimaryInput
          value={secondName}
          onChange={handleChange}
          name="secondName"
          label="Digite seu sobrenome"
          placeholder="Seu sobrenome"
        />
      </div>
      <Spacer height="4" />
      <PrimaryInput
        value={email}
        onChange={handleChange}
        name="email"
        label="Digite seu e-mail"
        placeholder="seuemail@email.com"
      />
      <Spacer height="4" />
      <Button colorScheme="green" width="100%">
        Enviar
      </Button>
    </form>
  );
}
