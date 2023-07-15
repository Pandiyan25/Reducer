import React from "react";
import { Outlet, Link, useNavigate,useLocation,Navigate } from "react-router-dom";
import AuthConsumer from "./context/auth";

export function Home() {
  const [auth] = AuthConsumer();
  console.log(auth);
  return (
    <>
      <h1>Home Route</h1>
      <Navbar />
      <br></br>
      <br></br>
      <Outlet />
    </>
  );
}

export function Navbar() {
  const [auth] = AuthConsumer();
  return (
    <>
      <Link to={"/login"}>Login</Link>
     {auth.auth === true?
     (
     <>
     <Link to={"/dashboard"}>Dashboard</Link>
     <Link to={"/settings"}>Settings</Link>
     </>):
     (
     <>
     </>
     )
      }
    </>
  );
}

export function Login() {
  const [, dispatch] = AuthConsumer();
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "login" })
          navigate('/dashboard')
        }}
      >
        Login
      </button>
      <br></br>
      <h1>Login Page</h1>
    </>
  );
}

export function Dashboard() {
  const [, dispatch] = AuthConsumer();
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "logout" });
          navigate('/login')
        }}
      >
        Logout
      </button>
      <br></br>
      <h1>Dashboard Page</h1>
    </>
  );
}

export function Settings() {
  const [, dispatch] = AuthConsumer();
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "logout" });
          navigate('/login')
        }}
      >
        Logout
      </button>
      <br></br>
      <h1>Settings Page</h1>
    </>
  );
}



export function RequiredAuth({ children }) {
  const [auth] = AuthConsumer();
  const location = useLocation();
  return (
    <>
      {auth.auth === true ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      )}
    </>
  );
}

