import MedicForm from "../componentes/atividade/MedicForm";

const Anamnese = () => {
    return (
      <>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
            fontFamily: "Segoe UI, Arial, sans-serif",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "2rem",
              padding: "1.5rem 2rem",
              background: "#0097a7",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontWeight: 700, fontSize: "1.3rem", letterSpacing: 1 }}
            >
              Clínica Vida+
            </span>
            <a
              href=""
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Consulta
            </a>
            <a
              href="/anamnese"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Anamnese
            </a>
            <a
              href="/autorizacao"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Autorização de Procedimento
            </a>
          </nav>
          <main
            style={{
              maxWidth: 600,
              margin: "3rem auto",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              padding: "2.5rem 2rem",
            }}
          >
            <h2
              style={{
                color: "#0097a7",
                marginBottom: "2rem",
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Formulário Médico
            </h2>
            <div
              style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
                fontFamily: "Segoe UI, Arial, sans-serif",
              }}
            >
              <nav
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "1.5rem 2rem",
                  background: "#0097a7",
                  color: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    letterSpacing: 1,
                  }}
                >
                  Clínica Vida+
                </span>
                <a
                  href=""
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  Consulta
                </a>
                <a
                  href="/anamnese"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  Anamnese
                </a>
                <a
                  href="/autorizacao"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  Autorização de Procedimento
                </a>
              </nav>
              <main
                style={{
                  maxWidth: 600,
                  margin: "3rem auto",
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  padding: "2.5rem 2rem",
                }}
              >
                <h2
                  style={{
                    color: "#0097a7",
                    marginBottom: "2rem",
                    textAlign: "center",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  Formulário Médico
                </h2>
                <MedicForm />
              </main>
            </div>
          </main>
        </div>
      </>
    );
}
 
export default Anamnese;