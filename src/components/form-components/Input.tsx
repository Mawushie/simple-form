import { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  name: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type,
  name,
  value,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-bold mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className="border rounded-md h-8 p-2 mb-2"
        onChange={handleChange}
      />
    </div>
  );
}
