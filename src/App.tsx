import { useRoutes } from "react-router-dom";
import { routes } from "./config/routes-config";

const App = () => {
  const routesEl = useRoutes(routes);
  return <div className="bg-slate-100 min-h-screen">{routesEl}</div>;
};

export default App;
