import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./router";

const App = () => {
  const router = createBrowserRouter(routers);
  return <RouterProvider router={router} />;
};

export default App;
