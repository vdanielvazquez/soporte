import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EliminarCuenta from "./pages/EliminarCuenta";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import TerminosYCondicionesVerificador from "./pages/TerminosYCondicionesVerificador";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaPrivacidadVerificador from "./pages/PoliticaPrivacidadVerificador";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* DESKUENTA */}
        <Route path="/" element={<TerminosYCondiciones />} />
        <Route path="/terminos" element={<TerminosYCondiciones />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />

        {/* DK VERIFICADOR */}
        <Route
          path="/terminos-verificador"
          element={<TerminosYCondicionesVerificador />}
        />
        <Route
          path="/privacidad-verificador"
          element={<PoliticaPrivacidadVerificador />}
        />

        {/* CUALQUIER RUTA NO EXISTENTE */}
        <Route path="*" element={<Navigate to="/terminos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
