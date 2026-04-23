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
        <h1 style={{ margin: 0, color: "#333" }}>Términos y Condiciones</h1>
        <p style={{ marginTop: 6, color: "#666" }}>
          Última actualización: 20 de abril de 2026
        </p>
      </div>

      <Section title="1. Uso de la aplicación">
        El usuario se compromete a utilizar la aplicación de forma responsable,
        respetando las leyes aplicables y evitando cualquier uso indebido del
        sistema, contenido o funcionalidades.
      </Section>

      <Section title="2. Suscripciones y acceso">
        La aplicación ofrece suscripciones que permiten acceder a beneficios y
        funcionalidades premium dentro de la plataforma.
        <br />
        El acceso a los beneficios depende del plan activo del usuario.
      </Section>

      <Section title="3. Compras dentro de la app">
        Todas las suscripciones se gestionan exclusivamente a través del sistema
        de compras integradas de Apple (In-App Purchase).
        <br />
        Las suscripciones pueden renovarse automáticamente según la
        configuración del usuario en su cuenta de Apple.
      </Section>

      <Section title="4. Uso de beneficios en establecimientos">
        Los beneficios de la suscripción pueden ser utilizados en negocios
        afiliados, los cuales pueden variar con el tiempo. Cada negocio es
        responsable de sus propias promociones y condiciones.
      </Section>

      <Section title="5. Cuentas de usuario">
        El usuario es responsable de mantener la confidencialidad de su cuenta.
        La eliminación de la cuenta es permanente e irreversible.
      </Section>

      <Section title="6. Contenido de terceros">
        Algunos contenidos, promociones o beneficios pueden ser proporcionados
        por terceros. La aplicación no es responsable de la exactitud o
        disponibilidad de dichos contenidos.
      </Section>

      <Section title="7. Limitación de responsabilidad">
        La aplicación no se hace responsable por daños derivados del uso
        indebido de la plataforma o de servicios proporcionados por terceros.
      </Section>

      <Section title="8. Cambios en los términos">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Los cambios serán publicados dentro de la aplicación o sitio
        web.
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
