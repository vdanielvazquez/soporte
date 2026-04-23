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
        <h1 style={{ margin: 0, color: "#000" }}>Términos y Condiciones</h1>
        <p style={{ marginTop: 6, color: "#666" }}>
          Última actualización: 20 de abril de 2026
        </p>
      </div>

      <Section title="1. Uso de la aplicación">
        El usuario se compromete a utilizar la aplicación de manera adecuada,
        respetando las leyes aplicables y evitando cualquier uso indebido del
        sistema.
      </Section>

      <Section title="2. Suscripciones">
        Las suscripciones tienen una duración de 30 días y permiten acceder a
        beneficios dentro de la aplicación. El acceso depende del plan
        contratado.
      </Section>

      <Section title="3. Pagos y renovaciones">
        Todas las suscripciones se procesan exclusivamente mediante Apple In-App
        Purchase. No existen métodos de pago externos.
      </Section>

      <Section title="4. Uso de beneficios">
        Los beneficios pueden variar según el plan activo del usuario.
      </Section>

      <Section title="5. Eliminación de cuenta">
        El usuario puede eliminar su cuenta en cualquier momento. Esta acción es
        irreversible.
      </Section>

      <Section title="6. Contenido y promociones">
        Los negocios son responsables del contenido publicado en la plataforma.
      </Section>

      <Section title="7. Limitación de responsabilidad">
        No nos hacemos responsables por el uso de servicios de terceros.
      </Section>

      <Section title="8. Cambios en los términos">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento.
      </Section>

      <div
        style={{
          marginTop: 30,
          padding: 15,
          background: "#fff3cd",
          borderRadius: 10,
          fontSize: 14,
        }}
      >
        ⚠️ El uso continuo de la aplicación implica la aceptación de estos
        términos.
      </div>
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
