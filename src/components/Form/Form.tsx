import { Button, Spacer } from "@chakra-ui/react";
import PrimaryInput from "../Input/PrimaryInput";
import { useState } from "react";
import "./form.css";
import { useIdentityMutation } from "../../hooks/useIdentityMutation";

export function Form() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { mutate } = useIdentityMutation();

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName,
    });
  };

  return (
    <form>
      <div className="input-name-form-container">
        <PrimaryInput
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          name="firstName"
          label="Digite seu nome"
          placeholder="Seu primeiro nome"
        />
        <PrimaryInput
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          name="lastName"
          label="Digite seu sobrenome"
          placeholder="Seu sobrenome"
        />
      </div>
      <Spacer height="4" />
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        label="Digite seu e-mail"
        placeholder="seuemail@email.com"
      />
      <Spacer height="4" />
      <Button colorScheme="green" width="100%" onClick={submit}>
        Enviar
      </Button>
    </form>
  );
}
