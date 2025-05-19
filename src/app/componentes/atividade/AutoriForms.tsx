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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-7 border border-blue-100"
            >
                <div className="flex flex-col items-center mb-4">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2 text-blue-600">
                        <circle cx="12" cy="12" r="10" fill="#e0f2fe"/>
                        <path d="M12 7v10M7 12h10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <h2 className="text-3xl font-extrabold text-blue-900 mb-1 text-center">
                        Clínica Vida Saúde
                    </h2>
                    <p className="text-blue-700 text-sm text-center">
                        Solicitação de Autorização de Procedimento Médico
                    </p>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Nome do Paciente
                    </label>
                    <input
                        {...register("patientName")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.patientName ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Digite o nome do paciente"
                    />
                    {errors.patientName && (
                        <p className="text-red-500 text-xs mt-1">{errors.patientName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        CPF do Paciente
                    </label>
                    <input
                        {...register("patientCPF")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.patientCPF ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Digite o CPF do paciente"
                    />
                    {errors.patientCPF && (
                        <p className="text-red-500 text-xs mt-1">{errors.patientCPF.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Procedimento Solicitado
                    </label>
                    <input
                        {...register("procedure")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.procedure ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Descreva o procedimento"
                    />
                    {errors.procedure && (
                        <p className="text-red-500 text-xs mt-1">{errors.procedure.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Nome do Médico Solicitante
                    </label>
                    <input
                        {...register("doctorName")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.doctorName ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Digite o nome do médico"
                    />
                    {errors.doctorName && (
                        <p className="text-red-500 text-xs mt-1">{errors.doctorName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        CRM do Médico
                    </label>
                    <input
                        {...register("crm")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.crm ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Digite o CRM do médico"
                    />
                    {errors.crm && (
                        <p className="text-red-500 text-xs mt-1">{errors.crm.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Data da Solicitação
                    </label>
                    <input
                        {...register("date")}
                        type="date"
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.date ? "border-red-400" : "border-blue-200"
                        }`}
                    />
                    {errors.date && (
                        <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Justificativa
                    </label>
                    <textarea
                        {...register("justification")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.justification ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Descreva a justificativa para o procedimento"
                        rows={3}
                    />
                    {errors.justification && (
                        <p className="text-red-500 text-xs mt-1">{errors.justification.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg hover:from-blue-600 hover:to-green-500 transition-colors font-bold shadow-md"
                >
                    Solicitar Autorização
                </button>
            </form>
        </div>
    );
}
