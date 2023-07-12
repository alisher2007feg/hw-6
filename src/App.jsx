import LoginP from "./pages/LoginP";
import DashboardP from "./pages/DashboardP";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const isAuth = localStorage.getItem("isAuth") || "";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <DashboardP /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
