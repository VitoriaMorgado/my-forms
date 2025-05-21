export interface IClient {
  id_cliente: string;
  nome: string;
  email: string;
}

export interface APIResponse<T> {
  status: "success" | "error";
  mensage: string;
  data: T; //T Generics do Typescript pode ser qualquer tipo de dado
}
