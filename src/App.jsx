import './App.css'

import { useEffect, useState } from 'react';
import { supabase } from './client';
import { useRoutes } from "react-router-dom";

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select()
      if (error) {
        console.error(error)
        return
      }
      setCreators(data)
    }

    fetchCreators()
  }, [])

  const routes = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/creators/:id/edit", element: <EditCreator /> },
  ]);

  return routes;
}

export default App;