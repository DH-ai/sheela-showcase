import { createRoot } from "react-dom/client";
import LoginPage from "./login_page";
import "./index.css";
const App = () => {
  return (
    <>
      <div>
        <h1 className="text-blue-500 text-center text-4xl bg-amber-300">
          Adopt ddMesad!
        </h1>
      </div>
      <LoginPage />
    </>
  );
};

const root = document.getElementById("root");

createRoot(root).render(<App />);
