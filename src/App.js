import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import New from "./components/News/New";
import "./App.css";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      {/*<Navbar state={props.state.sidebar} />*/}
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
            // store={props.store}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
            // store={props.store}
            />
          )}
        />
        <Route path="/news" render={() => <New />} />
      </div>
    </div>
  );
};

export default App;
