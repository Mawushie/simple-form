import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const LoggedIn = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  //telling typescript that the type of the user can be both null or another type
  //since when we call the setter function, we can give it a value
  const [user, setUser] = useState<AuthUser | null>(null);

  //if you are sure that the initial value won't be null when the component mounts, you
  //can specify it like this (type assertion)  and hence we wont need the optional
  //chaining when we are assessing the user
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogIn = () => {
    setLoggedIn((prev) => !prev);
    setUser({
      name: "Mawushie",
      email: "mamhonyah@gmail.com",
    });
  };
  return (
    <>
      <button onClick={handleLogIn}>{LoggedIn ? "Log out" : "Log in"}</button>
      {LoggedIn ? "Logged In" : "Logged Out"}
      {LoggedIn && (
        <div>
          <h3>Username :{user?.name} </h3>
          <h3>Email address{user?.email} : </h3>
        </div>
      )}
    </>
  );
};
