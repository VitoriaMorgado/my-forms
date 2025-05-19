// import AnamneseForm from "./componentes/atividade/Anamnese";
// import AuthorizationForm from "./componentes/atividade/AutoriForms";
import MedicForm from "./componentes/atividade/MedicForm";


export default function Home() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f5f5f5" }}>
      <a href="">Consulta</a>
      <a href="/anamnese">Anamnese</a>
      <a href="/autorizacao">Autorização de Procedimento</a>
      </nav>
      <MedicForm />
      {/* <AnamneseForm/> */}
      {/* <AuthorizationForm /> */}
    </>
  );
}
