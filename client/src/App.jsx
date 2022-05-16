import { useRoutes } from "./routes/useRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="App">{routes}</div>
    </Router>
  );
}

export default App;
