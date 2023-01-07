import { Provider } from "react-redux";
import { Rute, Store } from "./config/Config";
import "./css/style.css";

function App() {
  return (
    <Provider store={Store}>
      <Rute />
    </Provider>
  );
}

export default App;
