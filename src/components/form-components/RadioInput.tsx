import { ChangeEvent } from "react";

type Props = {
  title: string;
  name: string;
  options: any[];
  handleChange: (event: ChangeEvent) => void;
};

function RadioInput({ title, name, options, handleChange }: Props) {
  return (
    <div className="mb-2">
      <p className="font-bold">{title}</p>
      {options.map((option, key) => {
        return (
          <div key={key}>
            <label htmlFor={option.toLocaleLowerCase()}>
              <input
                type="radio"
                id={option.toLocaleLowerCase()}
                name={name}
                value={option}
                onChange={handleChange}
                className="mr-1 mb-2"
              />
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
