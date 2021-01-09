import React, { Fragment } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
function App() {
  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
