import { createContext, useState } from "react";

const LoginContext = createContext({
  uid: "",
  setUid: (uid) => {},
  newpsts: [],
  addpost: (np) => {},
  numpsts: 0,
});

export function LoginContextProvider(props) {
  const [username, setUsername] = useState("1");
  const [newposts, setNewposts] = useState([]);

  function addpostHandler(np) {
    setNewposts((prevPosts) => {
      return prevPosts.concat(np);
    });
  }

  const context = {
    uid: username,
    setUid: (uid) => setUsername(uid),
    newpsts: newposts,
    addpost: addpostHandler,
    numpsts: newposts.length,
  };
  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
