import type { ReactNode } from "react";

export default function PoliticaPrivacidadVerificador() {
  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Política de Privacidad</h1>
        <p style={subtitleStyle}>DK Verificador</p>
        <p style={dateStyle}>Última actualización: 18 de septiembre de 2026</p>
      </header>

      <Section title="1. Descripción">
        DK Verificador es una herramienta vinculada a DesKuenta cuya función principal es escanear códigos QR y consultar el estado de una membresía para determinar si se encuentra activa y vigente.
      </Section>

      <Section title="2. Información procesada durante la verificación">
        Al escanear un código QR, la aplicación puede enviar al servicio de DesKuenta el identificador contenido en el código para consultar la membresía asociada. Como resultado, puede mostrar información necesaria para identificar al usuario y confirmar el estado o vigencia de su membresía.
      </Section>

      <Section title="3. Uso de la cámara">
        DK Verificador solicita acceso a la cámara únicamente para detectar y leer códigos QR. La cámara no se utiliza para vigilancia ni para grabar contenido de manera continua. El acceso puede desactivarse desde los ajustes del dispositivo.
      </Section>

      <Section title="4. Finalidad del tratamiento">
        La información se utiliza exclusivamente para realizar la consulta solicitada, verificar la membresía, mostrar su estado y facilitar la aplicación de los beneficios correspondientes dentro del ecosistema DesKuenta.
      </Section>

      <Section title="5. Datos de cuenta y acceso">
        Si una versión de DK Verificador requiere identificación de un establecimiento o usuario autorizado, los datos de acceso se utilizarán para autenticar la sesión y controlar el acceso a las funciones correspondientes.
      </Section>

      <Section title="6. Pagos">
        DK Verificador no procesa pagos, no vende membresías y no almacena datos de tarjetas bancarias. Su función se limita a consultar y verificar información administrada por DesKuenta.
      </Section>

      <Section title="7. Compartición de información">
        No vendemos la información obtenida mediante las verificaciones. Los datos pueden ser procesados por los servicios técnicos necesarios para operar DK Verificador y DesKuenta, o cuando exista una obligación legal aplicable.
      </Section>

      <Section title="8. Seguridad">
        Adoptamos medidas razonables para proteger la información transmitida entre DK Verificador y los servicios de DesKuenta. Ningún sistema puede garantizar seguridad absoluta, por lo que también se recomienda mantener el dispositivo y la aplicación actualizados.
      </Section>

      <Section title="9. Conservación">
        La información relacionada con las verificaciones se conserva únicamente cuando sea necesaria para el funcionamiento, seguridad, soporte o cumplimiento de obligaciones aplicables. Los datos que no sean necesarios podrán eliminarse o anonimizarse.
      </Section>

      <Section title="10. Servicios de terceros">
        La aplicación puede depender de servicios de infraestructura, alojamiento o comunicaciones necesarios para consultar la información de membresías. Estos proveedores pueden procesar datos técnicos conforme a sus propias políticas y a las instrucciones necesarias para prestar el servicio.
      </Section>

      <Section title="11. Contacto">
        Para preguntas relacionadas con privacidad, funcionamiento del scanner o tratamiento de información en DK Verificador, puedes comunicarte a soporte@deskuenta.com.
      </Section>

      <Section title="12. Cambios en esta política">
        Esta Política de Privacidad puede actualizarse cuando cambien las funciones de DK Verificador, la plataforma DesKuenta o los requisitos aplicables. La versión vigente estará disponible en esta misma página.
      </Section>

      <div style={noticeStyle}>
        <strong>Importante:</strong> DK Verificador utiliza la información del código QR únicamente para consultar y validar membresías dentro del sistema DesKuenta.
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={{ margin: 0 }}>{children}</p>
    </section>
  );
}

const pageStyle = {
  maxWidth: 850,
  margin: "40px auto",
  padding: 24,
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.65,
  color: "#1A1A1A",
} as const;

const headerStyle = {
  background: "#FCE4EC",
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
  border: "1px solid #F8BBD0",
} as const;

const titleStyle = { margin: 0, color: "#C2185B" } as const;
const subtitleStyle = { margin: "6px 0 0", color: "#C2185B", fontWeight: 700 } as const;
const dateStyle = { margin: "4px 0 0", color: "#666666" } as const;

const sectionStyle = {
  marginBottom: 18,
  padding: 16,
  borderRadius: 10,
  background: "#FFF8FB",
  border: "1px solid #F8BBD0",
} as const;

const sectionTitleStyle = {
  color: "#C2185B",
  marginTop: 0,
  marginBottom: 8,
  fontSize: 20,
} as const;

const noticeStyle = {
  marginTop: 30,
  padding: 15,
  background: "#FCE4EC",
  border: "1px solid #F8BBD0",
  borderRadius: 10,
  color: "#7A1640",
} as const;
