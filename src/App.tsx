import { BrowserRouter, Routes, Route } from "react-router-dom";
import EliminarCuenta from "./pages/EliminarCuenta";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
        <Route path="/terminos" element={<TerminosYCondiciones />} />
      </Routes>
    </BrowserRouter>
  );
}
