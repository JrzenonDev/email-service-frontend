import { Input } from "@chakra-ui/react";
import "./primary-input.css";

interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function PrimaryInput({
  name,
  value,
  onChange,
  label,
}: PrimaryInputProps) {
  return (
    <div className="input-container">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <Input
        variant="filled"
        placeholder="Digite seu e-mail"
        name={name}
        value={value}
        onChange={onChange}
        _placeholder={{ color: "gray.500" }}
      />
    </div>
  );
}
