import React, { Fragment, Suspense, lazy } from "react";

import Sidebar from "./components/sidebar/Sidebar";

const Main = lazy(() => import("./components/main/Main"));
function App() {
  return (
    <Fragment>
      <Sidebar />
      <Suspense fallback={<div>loading...</div>}>
      <Main />
      </Suspense>
    </Fragment>
  );
}

export default App;
