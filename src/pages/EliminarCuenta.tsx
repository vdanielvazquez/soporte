import { useState } from "react";

export default function EliminarCuenta() {
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEliminar = async () => {
    if (!confirmado) {
      alert("Debes confirmar que deseas eliminar tu cuenta");
      return;
    }

    if (!telefono || !contrasena) {
      alert("Completa todos los campos");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://sistemawebpro.com/usuarios/eliminar-cuenta", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ telefono, contrasena }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      alert("Cuenta eliminada correctamente");
      window.location.href = "/";
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 600, margin: "40px auto", padding: 24, fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#1A1A1A" }}>
      <div style={{ background: "#FCE4EC", padding: 20, borderRadius: 12, border: "1px solid #F8BBD0", marginBottom: 20 }}>
        <h1 style={{ margin: 0, color: "#C2185B" }}>Eliminar cuenta</h1>
        <p style={{ margin: "6px 0 0", color: "#666" }}>DesKuenta</p>
      </div>

      <section style={cardStyle}>
        <p style={{ marginTop: 0 }}>Al eliminar tu cuenta se borrarán:</p>
        <ul>
          <li>Datos personales (nombre, correo y teléfono)</li>
          <li>Dirección registrada</li>
          <li>Información asociada a la cuenta que pueda eliminarse</li>
        </ul>
        <p><strong>Este proceso es irreversible.</strong></p>

        <p>Si tienes una suscripción activa, recuerda cancelarla desde tu dispositivo en la sección de suscripciones correspondiente.</p>
      </section>

      <section style={cardStyle}>
        <label style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <input type="checkbox" checked={confirmado} onChange={(e) => setConfirmado(e.target.checked)} style={{ marginTop: 5, accentColor: "#C2185B" }} />
          <span>Entiendo que mi cuenta será eliminada permanentemente.</span>
        </label>

        <input placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} style={inputStyle} />

        <button
          onClick={handleEliminar}
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 4,
            background: loading ? "#999" : "#C2185B",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: loading ? "default" : "pointer",
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          {loading ? "Eliminando..." : "Eliminar cuenta"}
        </button>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "#FFF8FB",
  border: "1px solid #F8BBD0",
  borderRadius: 10,
  padding: 18,
  marginBottom: 18,
} as const;

const inputStyle = {
  boxSizing: "border-box",
  width: "100%",
  padding: 11,
  marginTop: 12,
  marginBottom: 2,
  borderRadius: 8,
  border: "1px solid #F8BBD0",
  outline: "none",
  fontSize: 16,
} as const;
