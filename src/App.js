import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import New from "./components/News/New";
import "./App.css";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        {/*<Route path="/dialogs" component={Dialogs} />*/}
        {/*<Route path="/profile" component={Profile} />*/}
        {/*<Route path="/news" component={New} />*/}
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              store={props.store}
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store}
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/news" render={() => <New />} />
      </div>
    </div>
  );
};

export default App;
