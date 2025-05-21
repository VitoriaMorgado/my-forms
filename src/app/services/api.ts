import { formDataToJson } from "../lib/fromDataToJson";
import { APIResponse } from "../types/types";

const API_BASE_URL = "http://localhost/tnet/api-backend/";

export const createClient = async (formData: FormData): Promise<APIResponse<never>> => {
  const jsonData = formDataToJson(formData);

  try{
    console.log("Enviando dados /POST para API", jsonData);
    
    const response = await fetch(`${API_BASE_URL}clientes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();
    console.log("Resposta da API", data);

    if (!response.ok) {
      throw new Error("Erro ao criar cliente");
    }

    return data as APIResponse<never>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any){
    console.error("Erro ao criar cliente", error);
    throw new Error("Erro ao criar cliente");
  }

};
