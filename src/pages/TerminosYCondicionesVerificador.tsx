import { useState, type ReactNode, type CSSProperties } from "react";

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export default function TerminosYCondicionesVerificador() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // ENVIAR MENSAJE
  // =====================================================

  const handleSubmit = async () => {
    setError("");
    setEnviado(false);

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setError("Completa todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdqqorb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          app: "DK Verificador",
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
      } else {
        setError("No fue posible enviar el mensaje. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error(error);

      setError("Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // VISTA
  // =====================================================

  return (
    <div
      style={{
        maxWidth: 850,
        margin: "40px auto",
        padding: 24,
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#1a1a1a",
      }}
    >
      {/* ================================================= */}
      {/* SOPORTE */}
      {/* ================================================= */}

      <div
        style={{
          background: "#FCE4EC",
          padding: 20,
          borderRadius: 12,
          marginBottom: 25,
          border: "1px solid #F8BBD0",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#C2185B",
          }}
        >
          Soporte — DK Verificador
        </h1>

        <p>
          Si tienes algún problema relacionado con el escaneo de códigos QR,
          validación de membresías o funcionamiento de la aplicación, puedes
          comunicarte con nosotros.
        </p>

        <p>
          📧 <strong>soporte@deskuenta.com</strong>
        </p>

        <p>
          <strong>Tiempo estimado de respuesta:</strong> 24 - 48 horas.
        </p>

        {/* =============================================== */}
        {/* FORMULARIO */}
        {/* =============================================== */}

        <div
          style={{
            marginTop: 15,
            padding: 15,
            background: "#FFFFFF",
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#C2185B",
            }}
          >
            Enviar mensaje
          </h3>

          {/* NOMBRE */}

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setError("");
              setEnviado(false);
            }}
            style={inputStyle}
          />

          {/* CORREO */}

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              setError("");
              setEnviado(false);
            }}
            style={inputStyle}
          />

          {/* MENSAJE */}

          <textarea
            placeholder="Describe tu problema"
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
              setError("");
              setEnviado(false);
            }}
            style={{
              ...inputStyle,
              height: 110,
              resize: "vertical",
            }}
          />

          {/* BOTÓN */}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: 12,
              padding: 12,
              width: "100%",
              background: loading ? "#999999" : "#C2185B",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 8,
              cursor: loading ? "default" : "pointer",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {/* MENSAJE DE ERROR */}

          {error && (
            <p
              style={{
                color: "#D32F2F",
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              {error}
            </p>
          )}

          {/* MENSAJE ENVIADO */}

          {enviado && (
            <p
              style={{
                color: "#18770D",
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              Mensaje enviado correctamente 👍
            </p>
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* ENCABEZADO TÉRMINOS */}
      {/* ================================================= */}

      <div
        style={{
          background: "#FCE4EC",
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
          border: "1px solid #F8BBD0",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#C2185B",
          }}
        >
          Términos y Condiciones
        </h1>

        <p
          style={{
            marginTop: 6,
            marginBottom: 0,
            color: "#666666",
          }}
        >
          DK Verificador
        </p>

        <p
          style={{
            marginTop: 4,
            marginBottom: 0,
            color: "#666666",
          }}
        >
          Última actualización: 26 de agosto de 2026
        </p>
      </div>

      {/* ================================================= */}
      {/* TÉRMINOS */}
      {/* ================================================= */}

      <Section title="1. Descripción de la aplicación">
        DK Verificador es una aplicación diseñada para verificar el estado de
        membresías asociadas a DesKuenta. Su función principal es leer un código
        QR generado por la plataforma y consultar la información necesaria para
        determinar si una membresía se encuentra activa y vigente.
      </Section>

      <Section title="2. Uso de DK Verificador">
        La aplicación deberá utilizarse exclusivamente para verificar códigos QR
        relacionados con el sistema DesKuenta y para confirmar el estado de las
        membresías correspondientes. El usuario se compromete a utilizar la
        aplicación de manera legal y adecuada.
      </Section>

      <Section title="3. Escaneo de códigos QR">
        DK Verificador utiliza la cámara del dispositivo para leer códigos QR.
        La información obtenida mediante el código se utiliza para realizar la
        consulta correspondiente y mostrar el estado de la membresía asociada.
      </Section>

      <Section title="4. Validación de membresías">
        El resultado mostrado por DK Verificador depende de la información
        disponible en el sistema al momento de realizar la consulta. La
        aplicación puede mostrar información relacionada con el estado de la
        membresía, su vigencia y los datos necesarios para identificar la
        membresía correspondiente.
      </Section>

      <Section title="5. Membresías activas">
        Una validación satisfactoria indica que, de acuerdo con la información
        disponible en el sistema en ese momento, la membresía consultada se
        encuentra activa. La disponibilidad y aplicación de beneficios dependerá
        de las condiciones correspondientes dentro de DesKuenta.
      </Section>

      <Section title="6. Membresías vencidas o no válidas">
        Si la membresía aparece como vencida, inactiva, inexistente o no válida,
        DK Verificador podrá rechazar la validación. El usuario deberá revisar
        el estado de su membresía mediante los medios disponibles en DesKuenta.
      </Section>

      <Section title="7. Conexión a Internet">
        DK Verificador requiere conexión a Internet para consultar la
        información actualizada de las membresías. Una conexión inexistente o
        inestable, así como una interrupción temporal de nuestros servicios,
        puede impedir realizar una validación.
      </Section>

      <Section title="8. Compras y pagos">
        DK Verificador no procesa pagos, no vende suscripciones y no realiza
        cobros al usuario. Su función se limita a verificar información
        relacionada con las membresías administradas mediante DesKuenta.
      </Section>

      <Section title="9. Uso autorizado">
        El usuario no deberá utilizar DK Verificador para intentar alterar,
        falsificar, duplicar, manipular o utilizar de forma fraudulenta códigos
        QR, membresías o información obtenida mediante la aplicación.
      </Section>

      <Section title="10. Disponibilidad del servicio">
        Procuramos mantener el servicio disponible y funcionando correctamente,
        pero pueden existir interrupciones temporales ocasionadas por
        mantenimiento, actualizaciones, problemas de conexión o circunstancias
        técnicas fuera de nuestro control.
      </Section>

      <Section title="11. Exactitud de la información">
        DK Verificador muestra la información disponible en el sistema al
        momento de realizar la consulta. Si existe alguna inconsistencia en el
        estado mostrado, el usuario o establecimiento podrá comunicarse con
        soporte para solicitar una revisión.
      </Section>

      <Section title="12. Cámara y permisos">
        Para utilizar la función de escaneo, la aplicación solicita permiso para
        acceder a la cámara del dispositivo. Este permiso se utiliza para
        detectar y leer los códigos QR necesarios para realizar la verificación.
      </Section>

      <Section title="13. Protección de la información">
        La información obtenida durante la validación deberá utilizarse
        exclusivamente para comprobar la vigencia de una membresía y permitir la
        aplicación de los beneficios correspondientes. No deberá utilizarse para
        fines diferentes a los relacionados con DesKuenta y DK Verificador.
      </Section>

      <Section title="14. Limitación de responsabilidad">
        No nos hacemos responsables por interrupciones de Internet, fallas del
        dispositivo, problemas de servicios de terceros o circunstancias
        externas que impidan temporalmente realizar una consulta o validación.
      </Section>

      <Section title="15. Actualizaciones">
        DK Verificador podrá recibir actualizaciones para corregir errores,
        mejorar su funcionamiento, reforzar la seguridad o incorporar nuevas
        herramientas relacionadas con la validación y administración de
        membresías.
      </Section>

      <Section title="16. Cambios en los términos">
        Estos Términos y Condiciones pueden modificarse cuando sea necesario
        para reflejar cambios en la aplicación, en sus funciones o en los
        servicios relacionados. La versión actualizada estará disponible en esta
        página.
      </Section>

      <Section title="17. Aceptación de los términos">
        Al utilizar DK Verificador, el usuario reconoce haber leído y aceptado
        estos Términos y Condiciones. Si no está de acuerdo con ellos, deberá
        dejar de utilizar la aplicación.
      </Section>

      {/* ================================================= */}
      {/* AVISO FINAL */}
      {/* ================================================= */}

      <div
        style={{
          marginTop: 30,
          padding: 15,
          background: "#FCE4EC",
          borderRadius: 10,
          border: "1px solid #F8BBD0",
          fontSize: 14,
        }}
      >
        ⚠️ <strong>Importante:</strong> DK Verificador es una herramienta de
        validación vinculada al sistema DesKuenta. La aplicación no vende
        membresías ni procesa pagos.
      </div>
    </div>
  );
}

// =====================================================
// ESTILOS INPUT
// =====================================================

const inputStyle: CSSProperties = {
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 8,
  border: "1px solid #CCCCCC",
  fontSize: 16,
  fontFamily: "Arial, sans-serif",
  outline: "none",
};

// =====================================================
// TIPOS SECTION
// =====================================================

type SectionProps = {
  title: string;
  children: ReactNode;
};

// =====================================================
// COMPONENTE SECTION
// =====================================================

function Section({ title, children }: SectionProps) {
  return (
    <div
      style={{
        marginBottom: 18,
        padding: 16,
        borderRadius: 10,
        background: "#FAFAFA",
        border: "1px solid #EEEEEE",
      }}
    >
      <h3
        style={{
          color: "#C2185B",
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
