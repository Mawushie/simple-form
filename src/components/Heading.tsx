//children props type
// type HeadingProps = {
//   children: string;
// };

//passing react components as children
type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
