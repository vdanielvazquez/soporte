import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EliminarCuenta from "./pages/EliminarCuenta";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EliminarCuenta />} />
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
        <Route path="/terminos" element={<TerminosYCondiciones />} />

        {/* fallback SIEMPRE al final */}
        <Route path="*" element={<Navigate to="/terminos" />} />
      </Routes>
    </BrowserRouter>
  );
}
