import React, { createContext } from "react";

const defaultContext = {
  instance: undefined
}

const GlobalContext = createContext(defaultContext)

export default GlobalContext;
