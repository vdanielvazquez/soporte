import { useState } from "react";

export default function SoporteYTerminos() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdqqorb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          mensaje,
        }),
      });

      if (response.ok) {
        setEnviado(true);
        setNombre("");
        setCorreo("");
        setMensaje("");
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 850,
        margin: "40px auto",
        padding: 24,
        fontFamily: "Arial",
        lineHeight: 1.6,
        color: "#1a1a1a",
      }}
    >
      {/* ===================== SOPORTE ===================== */}
      <div
        style={{
          background: "#eef3ff",
          padding: 20,
          borderRadius: 12,
          marginBottom: 25,
        }}
      >
        <h1 style={{ margin: 0, color: "#1a1a1a" }}>Soporte</h1>

        <p>📧 soporte@deskuenta.com</p>
        <p>Tiempo de respuesta: 24 - 48 horas</p>

        <div
          style={{
            marginTop: 15,
            padding: 15,
            background: "#fff",
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <h3>Enviar mensaje</h3>

          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Describe tu problema"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            style={{ ...inputStyle, height: 100 }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: 10,
              padding: 10,
              width: "100%",
              background: loading ? "#999" : "#4a6cf7",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {enviado && (
            <p style={{ color: "green", marginTop: 10 }}>
              Mensaje enviado correctamente 👍
            </p>
          )}
        </div>
      </div>

      {/* ===================== TÉRMINOS ===================== */}
      <div
        style={{
          background: "#f5f7ff",
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <h1 style={{ color: "#1a1a1a" }}>Términos y Condiciones</h1>
        <p>Última actualización: 20 de abril de 2026</p>
      </div>

      <Section title="1. Uso de la aplicación">
        El usuario se compromete a utilizar la aplicación de forma responsable.
      </Section>

      <Section title="2. Suscripciones">
        Las suscripciones permiten acceder a diferentes niveles de contenido.
      </Section>

      <Section title="3. Compras dentro de la app">
        Todas las compras se realizan exclusivamente mediante Apple In-App
        Purchase.
      </Section>

      <Section title="4. Contenido">
        Los negocios y promociones dependen del plan activo del usuario.
      </Section>

      <Section title="5. Cambios">
        Nos reservamos el derecho de actualizar estos términos.
      </Section>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 8,
  border: "1px solid #ccc",
};

function Section({ title, children }: any) {
  return (
    <div
      style={{
        marginBottom: 18,
        padding: 16,
        borderRadius: 10,
        background: "#fafafa",
        border: "1px solid #eee",
      }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
