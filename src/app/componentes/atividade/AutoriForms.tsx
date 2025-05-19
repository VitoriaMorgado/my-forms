"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    patientName: z.string().min(1, { message: "Nome do paciente é obrigatório" }),
    patientCPF: z.string().min(1, { message: "CPF do paciente é obrigatório" }),
    procedure: z.string().min(1, { message: "Procedimento é obrigatório" }),
    doctorName: z.string().min(1, { message: "Nome do médico é obrigatório" }),
    crm: z.string().min(1, { message: "CRM é obrigatório" }),
    date: z.string().min(1, { message: "Data é obrigatória" }),
    justification: z.string().min(1, { message: "Justificativa é obrigatória" }),
});

type IFormInput = z.infer<typeof schema>;

export default function AuthorizationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: zodResolver(schema),
        defaultValues: {
            patientName: "",
            patientCPF: "",
            procedure: "",
            doctorName: "",
            crm: "",
            date: "",
            justification: "",
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
                    Autorização de Procedimento Médico
                </h2>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Nome do Paciente:
                    </label>
                    <input
                        {...register("patientName")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.patientName ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Digite o nome do paciente"
                    />
                    {errors.patientName && (
                        <p className="text-red-400 text-sm mt-1">{errors.patientName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        CPF do Paciente:
                    </label>
                    <input
                        {...register("patientCPF")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.patientCPF ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Digite o CPF do paciente"
                    />
                    {errors.patientCPF && (
                        <p className="text-red-400 text-sm mt-1">{errors.patientCPF.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Procedimento Solicitado:
                    </label>
                    <input
                        {...register("procedure")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.procedure ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Descreva o procedimento"
                    />
                    {errors.procedure && (
                        <p className="text-red-400 text-sm mt-1">{errors.procedure.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Nome do Médico Solicitante:
                    </label>
                    <input
                        {...register("doctorName")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.doctorName ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Digite o nome do médico"
                    />
                    {errors.doctorName && (
                        <p className="text-red-400 text-sm mt-1">{errors.doctorName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        CRM do Médico:
                    </label>
                    <input
                        {...register("crm")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.crm ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Digite o CRM do médico"
                    />
                    {errors.crm && (
                        <p className="text-red-400 text-sm mt-1">{errors.crm.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Data da Solicitação:
                    </label>
                    <input
                        {...register("date")}
                        type="date"
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.date ? "border-red-500" : "border-gray-700"
                        }`}
                    />
                    {errors.date && (
                        <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Justificativa:
                    </label>
                    <textarea
                        {...register("justification")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.justification ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Descreva a justificativa para o procedimento"
                        rows={3}
                    />
                    {errors.justification && (
                        <p className="text-red-400 text-sm mt-1">{errors.justification.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                    Solicitar Autorização
                </button>
            </form>
        </div>
    );
}
