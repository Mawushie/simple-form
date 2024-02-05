//we will use the context we provided here
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  //   const userContext = useContext(UserContext);
  //destructuring from the useContext
  const { user, setUser } = useContext(UserContext);
  console.log(user, setUser);
  const handleClick = () => {
    // console.log("clicked");
    setUser({
      name: "Mawushie",
      email: "mamhonyah@gmail.com",
    });
  };
  return (
    <>
      <button onClick={handleClick}>{user ? "Logout" : "Login"}</button>

      {user ? (
        <div>
          <h2>Your name is : {user.name}</h2>
          <h2>Your email address is : {user.email}</h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
