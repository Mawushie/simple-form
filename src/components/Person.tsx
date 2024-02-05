//object type as props
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
  //array type as props
  institutions: string[];
  courses: {
    courseCode: number;
    level: number;
  }[];
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      My name is {props.name.first} {props.name.last}
      {props.institutions.map((uni, index) => {
        return <h2 key={index}>{uni}</h2>;
      })}
      {props.courses.map((course) => {
        return <p key={course.courseCode}>{course.courseCode}</p>;
      })}
    </div>
  );
};
