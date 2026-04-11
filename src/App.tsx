import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AdsRoutes from "./routes/adsRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdsRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App
