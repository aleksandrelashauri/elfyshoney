// import dotenv from "dotenv";

import { useRoutes } from "react-router-dom";

import React from "react";
import routes from "./routes/routes";
import ButtonAppBar from "./components/header/components/NavBar";
import MovingElf from "./components/MovingElf";
// dotenv.config();
function App() {
  const routing = useRoutes(routes());
  return (
    <>
      <ButtonAppBar />
      {routing}
      <MovingElf />
    </>
  );
}

export default App;
