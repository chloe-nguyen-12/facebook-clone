import { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { dataContext } from "./context";

function App() {
  const {
    state: { user },
    dispatch,
  } = useContext(dataContext);

  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
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
