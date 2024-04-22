import RouteConfiguration from "./route/RouteConfiguration";
import "./App.scss";
import { AuthContextProvider } from "./utilities/context/AuthContext";
import { SearchContextProvider } from "./utilities/context/SearchContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <SearchContextProvider>
          <RouteConfiguration />
        </SearchContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
