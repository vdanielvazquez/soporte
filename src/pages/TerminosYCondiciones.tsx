export default function TerminosYCondiciones() {
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
      <div
        style={{
          background: "#f5f7ff",
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <h1 style={{ margin: 0 }}>Términos y Condiciones</h1>
        <p style={{ marginTop: 6, color: "#666" }}>
          Última actualización: 20 de abril de 2026
        </p>
      </div>

      <Section title="1. Uso de la aplicación">
        El usuario se compromete a utilizar la aplicación de manera adecuada,
        respetando las leyes aplicables y evitando cualquier uso indebido del
        sistema o de sus funcionalidades.
      </Section>

      <Section title="2. Suscripciones">
        Las suscripciones tienen una duración de 30 días y permiten acceder a
        beneficios dentro de la aplicación, como promociones y visibilidad de
        negocios.
        <br />
        El acceso puede variar según el plan contratado.
      </Section>

      <Section title="3. Pagos y renovaciones">
        Los pagos se procesan a través de Apple Store (StoreKit). Las
        suscripciones pueden renovarse automáticamente según la configuración
        del usuario.
      </Section>

      <Section title="4. Uso físico de la suscripción">
        La suscripción puede ser utilizada de forma presencial en negocios
        afiliados mediante la presentación de la cuenta activa dentro de la
        aplicación.
      </Section>

      <Section title="5. Eliminación de cuenta">
        El usuario puede eliminar su cuenta en cualquier momento. Esta acción es
        irreversible y elimina toda la información asociada.
      </Section>

      <Section title="6. Contenido y promociones">
        Los negocios son responsables del contenido, promociones y beneficios
        publicados dentro de la plataforma.
      </Section>

      <Section title="7. Limitación de responsabilidad">
        No nos hacemos responsables por el uso incorrecto de la aplicación o por
        problemas derivados de terceros o de los establecimientos afiliados.
      </Section>

      <Section title="8. Cambios en los términos">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Se recomienda revisarlos periódicamente.
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

// componente interno bonito
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: 0, color: "#444" }}>{children}</p>
    </div>
  );
}
