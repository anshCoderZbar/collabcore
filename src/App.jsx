import { useEffect } from "react";
import { AllRoutes } from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import { useToken } from "lib/utils/UseToken";

function App() {
  const { getToken } = useToken();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  const auth = getToken();

  return <AllRoutes auth={auth} />;
}

export default App;
