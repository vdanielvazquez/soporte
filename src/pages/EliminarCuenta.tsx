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

      const res = await fetch(
        "https://sistemawebpro.com/usuarios/eliminar-cuenta",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            telefono,
            contrasena,
          }),
        },
      );

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
    <div style={{ maxWidth: 500, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Eliminar cuenta</h1>

      <p>Al eliminar tu cuenta se borrarán:</p>
      <ul>
        <li>Datos personales (nombre, correo, teléfono)</li>
        <li>Dirección registrada</li>
        <li>Información de uso</li>
      </ul>

      <p>
        <b>Este proceso es irreversible.</b>
      </p>

      <p>Si tienes suscripción activa:</p>
      <ul>
        <li>Debes cancelarla desde tu dispositivo</li>
        <li>Ajustes &gt; Suscripciones</li>
      </ul>

      <div>
        <input
          type="checkbox"
          checked={confirmado}
          onChange={(e) => setConfirmado(e.target.checked)}
        />
        <span> Entiendo que mi cuenta será eliminada permanentemente</span>
      </div>

      <br />

      <input
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <button
        onClick={handleEliminar}
        disabled={loading}
        style={{
          width: "100%",
          padding: 12,
          background: "red",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Eliminando..." : "Eliminar cuenta"}
      </button>
    </div>
  );
}
