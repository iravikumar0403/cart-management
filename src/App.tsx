import { useRoutes } from "react-router-dom";
import { routes } from "./config/routes-config";

const App = () => {
  const routesEl = useRoutes(routes);
  return <div>{routesEl}</div>;
};

export default App;
