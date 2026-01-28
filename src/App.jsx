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

  const fetchCreators = async () => {
    const { data, error } = await supabase
      .from("creators")
      .select("*")

    if (error) {
      console.error(error);
      return;
    }
    setCreators(data);
  };

  useEffect(() => {
    fetchCreators()
  }, [])

  const routes = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "/new", element: <AddCreator fetchCreators={fetchCreators} /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/creators/:id/edit", element: <EditCreator fetchCreators={fetchCreators} /> },
  ]);

  return (
    <div className='app'>
      <header className='siteHeader'>
        <h1>CREATORVERSE</h1>
        <p>(figure drawing edition)</p>
      </header>
      {routes}
    </div>
  );
}

export default App;