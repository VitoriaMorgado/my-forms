"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validação para Anamnese
const schema = z.object({
    patientName: z.string().min(1, { message: "Nome do paciente é obrigatório" }),
    age: z.string().min(1, { message: "Idade é obrigatória" }),
    gender: z.string().min(1, { message: "Sexo é obrigatório" }),
    mainComplaint: z.string().min(1, { message: "Queixa principal é obrigatória" }),
    historyOfPresentIllness: z.string().min(1, { message: "História da doença atual é obrigatória" }),
    pastMedicalHistory: z.string().optional(),
    allergies: z.string().optional(),
    medications: z.string().optional(),
    familyHistory: z.string().optional(),
    socialHistory: z.string().optional(),
});

type IFormInput = z.infer<typeof schema>;

export default function AnamneseForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: zodResolver(schema),
        defaultValues: {
            patientName: "",
            age: "",
            gender: "",
            mainComplaint: "",
            historyOfPresentIllness: "",
            pastMedicalHistory: "",
            allergies: "",
            medications: "",
            familyHistory: "",
            socialHistory: "",
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-7 border border-blue-100"
            >
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-blue-100 rounded-full p-3 mb-2">
                        <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                            <path fill="#2563eb" d="M12 2a7 7 0 0 1 7 7v2a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V9a5 5 0 0 0-5-5Zm-1 13.93A8.001 8.001 0 0 0 4 21a1 1 0 1 0 2 0 6 6 0 0 1 12 0 1 1 0 1 0 2 0 8.001 8.001 0 0 0-7-7.07Z"/>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-blue-900 text-center">
                        Anamnese do Paciente
                    </h2>
                    <p className="text-blue-700 text-sm mt-1 text-center">
                        Preencha os dados abaixo para o prontuário médico.
                    </p>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Nome do Paciente:
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

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-blue-900 font-semibold mb-1">
                            Idade:
                        </label>
                        <input
                            {...register("age")}
                            type="number"
                            min={0}
                            className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                errors.age ? "border-red-400" : "border-blue-200"
                            }`}
                            placeholder="Idade"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-blue-900 font-semibold mb-1">
                            Sexo:
                        </label>
                        <select
                            {...register("gender")}
                            className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                errors.gender ? "border-red-400" : "border-blue-200"
                            }`}
                        >
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Queixa Principal:
                    </label>
                    <textarea
                        {...register("mainComplaint")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.mainComplaint ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Descreva a queixa principal"
                        rows={2}
                    />
                    {errors.mainComplaint && (
                        <p className="text-red-500 text-xs mt-1">{errors.mainComplaint.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        História da Doença Atual:
                    </label>
                    <textarea
                        {...register("historyOfPresentIllness")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.historyOfPresentIllness ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Descreva a história da doença atual"
                        rows={3}
                    />
                    {errors.historyOfPresentIllness && (
                        <p className="text-red-500 text-xs mt-1">{errors.historyOfPresentIllness.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Antecedentes Pessoais:
                    </label>
                    <textarea
                        {...register("pastMedicalHistory")}
                        className="w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-200"
                        placeholder="Descreva antecedentes pessoais (opcional)"
                        rows={2}
                    />
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Alergias:
                    </label>
                    <textarea
                        {...register("allergies")}
                        className="w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-200"
                        placeholder="Liste alergias (opcional)"
                        rows={1}
                    />
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Medicamentos em Uso:
                    </label>
                    <textarea
                        {...register("medications")}
                        className="w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-200"
                        placeholder="Liste medicamentos em uso (opcional)"
                        rows={1}
                    />
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Antecedentes Familiares:
                    </label>
                    <textarea
                        {...register("familyHistory")}
                        className="w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-200"
                        placeholder="Descreva antecedentes familiares (opcional)"
                        rows={2}
                    />
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Hábitos de Vida:
                    </label>
                    <textarea
                        {...register("socialHistory")}
                        className="w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-200"
                        placeholder="Descreva hábitos de vida (opcional)"
                        rows={2}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg hover:from-blue-700 hover:to-green-600 transition-colors font-bold text-lg shadow-md mt-2"
                >
                    Salvar Anamnese
                </button>
            </form>
        </div>
    );
}
