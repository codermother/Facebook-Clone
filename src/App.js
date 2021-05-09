import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convention

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
