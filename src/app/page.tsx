import ClientForm from "./componentes/ClientForm";

export default function Home() {
  return (
    <>
    <ClientForm/>

    <a href="/atividade">
    <button
      style={{
      padding: "10px 24px",
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "16px"
      }}
    >
      
      Atividade
    </button>
    </a>
    <a href="/atividade-api">
    <button>
      ATIVIDADE API
    </button>
    </a>
    </>
  );
}
