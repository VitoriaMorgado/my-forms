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
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
                    Anamnese do Paciente
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
                        Idade:
                    </label>
                    <input
                        {...register("age")}
                        type="number"
                        min={0}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.age ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Digite a idade"
                    />
                    {errors.age && (
                        <p className="text-red-400 text-sm mt-1">{errors.age.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Sexo:
                    </label>
                    <select
                        {...register("gender")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.gender ? "border-red-500" : "border-gray-700"
                        }`}
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                    {errors.gender && (
                        <p className="text-red-400 text-sm mt-1">{errors.gender.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Queixa Principal:
                    </label>
                    <textarea
                        {...register("mainComplaint")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.mainComplaint ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Descreva a queixa principal"
                        rows={2}
                    />
                    {errors.mainComplaint && (
                        <p className="text-red-400 text-sm mt-1">{errors.mainComplaint.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        História da Doença Atual:
                    </label>
                    <textarea
                        {...register("historyOfPresentIllness")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.historyOfPresentIllness ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Descreva a história da doença atual"
                        rows={3}
                    />
                    {errors.historyOfPresentIllness && (
                        <p className="text-red-400 text-sm mt-1">{errors.historyOfPresentIllness.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Antecedentes Pessoais:
                    </label>
                    <textarea
                        {...register("pastMedicalHistory")}
                        className="w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
                        placeholder="Descreva antecedentes pessoais (opcional)"
                        rows={2}
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Alergias:
                    </label>
                    <textarea
                        {...register("allergies")}
                        className="w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
                        placeholder="Liste alergias (opcional)"
                        rows={1}
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Medicamentos em Uso:
                    </label>
                    <textarea
                        {...register("medications")}
                        className="w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
                        placeholder="Liste medicamentos em uso (opcional)"
                        rows={1}
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Antecedentes Familiares:
                    </label>
                    <textarea
                        {...register("familyHistory")}
                        className="w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
                        placeholder="Descreva antecedentes familiares (opcional)"
                        rows={2}
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Hábitos de Vida:
                    </label>
                    <textarea
                        {...register("socialHistory")}
                        className="w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
                        placeholder="Descreva hábitos de vida (opcional)"
                        rows={2}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                    Salvar Anamnese
                </button>
            </form>
        </div>
    );
}
