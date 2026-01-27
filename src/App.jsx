import './App.css'

import { useRoutes } from "react-router-dom";

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/creators/:id/edit", element: <EditCreator /> },
  ]);

  return routes;
}

export default App;