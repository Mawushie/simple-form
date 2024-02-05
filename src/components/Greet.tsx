//Basic Types
type GreetProps = {
  name: string;
  messageCount?: number; //telling typescript that this props is optional
  isLoggedin: boolean;
};

//declaring an array of objects

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props; //destructuring it and giving it a default value if it isnt passed
  return (
    <div>
      {props.isLoggedin
        ? `Welcome ${props.name}! You have ${messageCount} messages!`
        : `Welcome Guest`}
    </div>
  );
}
