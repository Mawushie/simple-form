type Props = {
  label: string;
  name: string;
  options: any[];
  value?: string;
  handleChange: (event: any) => void;
};

function Select({ label, name, options, value, handleChange }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-bold mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="p-2 rounded-md mb-2"
      >
        <option value="">--Select--</option>
        {options.map((option, key) => {
          return (
            <option value={option} key={key}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
