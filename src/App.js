import { Toaster } from "react-hot-toast";
import "./App.css";
import { Main } from "./frontend/components";

function App() {
  return (
    <div className="App">
      <Main />
      <Toaster
        position="bottom-center"
        toastOptions={{ duration: 2000, className: "toast" }}
      />
    </div>
  );
}

export default App;
