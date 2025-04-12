import "./App.css";
import ContextsWrapper from "./contexts/ContextsWrapper";
import RouterComponent from "./routes";

function App() {
  return (
    <ContextsWrapper>
      <RouterComponent />
    </ContextsWrapper>
  );
}

export default App;
