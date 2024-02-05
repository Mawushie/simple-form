//passing an function as props
// type ButtonProps = {
//   handleClick: () => void;
// };

//using the event as a parameter
//the type for the event is React.MouseEvent.
//<HTMLButtonElement> is to tell that it is a button, that's optional
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click</button>;
};
