import RouteConfiguration from "./route/RouteConfiguration";
import "./App.scss";
import { AuthContextProvider } from "./utilities/context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RouteConfiguration />
      </AuthContextProvider>
    </div>
  );
}

export default App;
