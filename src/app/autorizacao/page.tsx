import AuthorizationForm from "../componentes/atividade/AutoriForms";


const Autorizacao = () => {
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
          <a href="/anamnese">Anamnese</a>
          <a href="">Autorização de Procedimento</a>
        </nav>
        <AuthorizationForm />
      </>
    );
}
 
export default Autorizacao;