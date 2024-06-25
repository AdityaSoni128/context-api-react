import React, { useContext, useEffect } from "react";
import { Usercontext } from "../context/Usercontext";

function Userinfo() {
  const {setUser} = useContext(Usercontext);

  useEffect(() => {
    setUser("Aditya Soni");
  }, []);
  return <h1>{"username"}</h1>;
}

export default Userinfo;
