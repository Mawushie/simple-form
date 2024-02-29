type Props =
  | {
      name?: string;
      checked?: boolean;
      handleChange: (event: any, option?: any) => void;
    } & (
      | {
          type: "single";
          label: string;
        }
      | {
          type: "multi";
          title: string;
          options: any[];
        }
    );

function Checkbox(props: Props) {
  return (
    <div>
      {props.type === "single" && (
        <div>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            type="checkbox"
            id={props.name}
            name={props.name}
            checked={props.checked}
            onChange={props.handleChange}
            className="ml-1"
          />
        </div>
      )}
      {props.type === "multi" && (
        <div className="mb-2">
          <p className="font-bold">{props.title}</p>
          {props.options.map((option, key) => {
            return (
              <div key={key}>
                <label htmlFor={option.toLocaleLowerCase()}>
                  <input
                    type="checkbox"
                    id={option.toLocaleLowerCase()}
                    name="hobbies"
                    checked={props.checked}
                    onChange={(event) => props.handleChange(event, option)}
                    className="mr-1"
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
