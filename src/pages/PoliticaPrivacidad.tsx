import type { ReactNode } from "react";

export default function PoliticaPrivacidad() {
  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Política de Privacidad</h1>
        <p style={subtitleStyle}>DesKuenta</p>
        <p style={dateStyle}>Última actualización: 18 de septiembre de 2026</p>
      </header>

      <Section title="1. Responsable del tratamiento">
        DesKuenta es responsable del tratamiento de la información utilizada para prestar sus servicios dentro de la aplicación y mantener el funcionamiento de la plataforma.
      </Section>

      <Section title="2. Información que podemos recopilar">
        Podemos recopilar información proporcionada por el usuario, como nombre, correo electrónico, teléfono, datos de perfil y dirección, así como información necesaria para administrar la cuenta, la membresía y el uso de las funciones de DesKuenta.
      </Section>

      <Section title="3. Información de ubicación">
        Cuando el usuario autoriza el acceso a la ubicación, DesKuenta puede utilizarla para mostrar negocios, promociones o resultados cercanos. El acceso depende de los permisos otorgados desde el dispositivo y puede desactivarse desde los ajustes del sistema.
      </Section>

      <Section title="4. Cámara, fotografías y archivos">
        Algunas funciones pueden solicitar acceso a la cámara o a fotografías cuando sea necesario para completar una acción iniciada por el usuario. DesKuenta utiliza estos permisos únicamente para la función correspondiente.
      </Section>

      <Section title="5. Finalidad de la información">
        La información puede utilizarse para crear y administrar cuentas, mantener sesiones, gestionar membresías, mostrar contenido y promociones, mejorar el servicio, atender solicitudes de soporte y proteger la seguridad de la plataforma.
      </Section>

      <Section title="6. Membresías y pagos">
        La información relacionada con una membresía se utiliza para identificar su estado, vigencia y beneficios asociados. Cuando un pago sea procesado por una tienda de aplicaciones u otro proveedor autorizado, la información financiera sensible es administrada por dicho proveedor conforme a sus propias políticas.
      </Section>

      <Section title="7. Compartición de información">
        No vendemos datos personales. La información puede compartirse únicamente con proveedores necesarios para operar el servicio, cumplir obligaciones legales, prevenir fraude o cuando el usuario lo autorice.
      </Section>

      <Section title="8. Conservación y seguridad">
        Conservamos la información durante el tiempo necesario para prestar el servicio y cumplir obligaciones aplicables. Aplicamos medidas razonables para protegerla contra acceso, alteración, divulgación o pérdida no autorizada.
      </Section>

      <Section title="9. Eliminación de cuenta">
        El usuario puede solicitar o realizar la eliminación de su cuenta mediante los mecanismos disponibles en DesKuenta. La eliminación puede implicar el borrado o anonimización de los datos asociados, salvo aquellos que debamos conservar por obligación legal o para resolver operaciones pendientes.
      </Section>

      <Section title="10. Servicios de terceros">
        DesKuenta puede utilizar servicios de terceros necesarios para alojamiento, comunicaciones, mapas, análisis, procesamiento de solicitudes u otras funciones. El tratamiento realizado directamente por esos proveedores se rige también por sus políticas correspondientes.
      </Section>

      <Section title="11. Derechos y contacto">
        Para realizar consultas sobre privacidad, solicitar correcciones o ejercer derechos relacionados con tus datos, puedes comunicarte a soporte@deskuenta.com.
      </Section>

      <Section title="12. Cambios en esta política">
        Esta Política de Privacidad puede actualizarse para reflejar cambios en las funciones de DesKuenta, requisitos legales o mejoras del servicio. La versión vigente estará disponible en esta página.
      </Section>

      <div style={noticeStyle}>
        <strong>Contacto:</strong> soporte@deskuenta.com
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
