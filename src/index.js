import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { MovieProvider } from "./Contexts/MovieContext";

createRoot(document.getElementById("root")).render(

    <MovieProvider>
      <App />
    </MovieProvider>
  
);
