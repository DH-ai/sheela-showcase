import { createRoot } from "react-dom/client";
import './styles/output.css';
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
