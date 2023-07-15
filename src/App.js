import React from "react";
import { useRoutes } from "react-router-dom";
import { Login, Home, Dashboard, Settings, RequiredAuth} from "./global";
function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <RequiredAuth><Dashboard /></RequiredAuth>,
        },
        {
          path: "/settings",
          element: <RequiredAuth><Settings/></RequiredAuth>,
        },
      ],
    },
  ]);

  return routes;

  
  // return (

  //   <>
  //     {/* <Routes>
  //       <Route exact path="/" element={<div>Login</div>} />
  //       <Route path="/dashboard" element={<div>Dashboard</div>} />
  //       <Route path="/settings" element={<div>Settings</div>} />
  //     </Routes> */}

  //   </>
  // );
}

export default App;
