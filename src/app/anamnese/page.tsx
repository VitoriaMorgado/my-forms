import AnamneseForm from "../componentes/atividade/Anamnese";

const Anamnese = () => {
    return (
      <>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            background: "#f5f5f5",
          }}
        >
          <a href="./">Consulta</a>
          <a href="">Anamnese</a>
          <a href="/autorizacao">Autorização de Procedimento</a>
        </nav>
        <AnamneseForm />
      </>
    );
}
 
export default Anamnese;