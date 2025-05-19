"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    patientName: z.string().min(1, { message: "Nome do paciente é obrigatório" }),
    doctorName: z.string().min(1, { message: "Nome do médico é obrigatório" }),
    date: z.string().min(1, { message: "Data é obrigatória" }),
    time: z.string().min(1, { message: "Horário é obrigatório" }),
    reason: z.string().min(1, { message: "Motivo é obrigatório" }),
});

type IFormInput = z.infer<typeof schema>;

export default function AppointmentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: zodResolver(schema),
        defaultValues: {
            patientName: "",
            doctorName: "",
            date: "",
            time: "",
            reason: "",
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
                    Agendamento de Consulta
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
                        Nome do Médico:
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
                        Data da Consulta:
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
                        Horário:
                    </label>
                    <input
                        {...register("time")}
                        type="time"
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.time ? "border-red-500" : "border-gray-700"
                        }`}
                    />
                    {errors.time && (
                        <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-300 font-medium mb-1">
                        Motivo da Consulta:
                    </label>
                    <textarea
                        {...register("reason")}
                        className={`w-full px-4 py-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.reason ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Descreva o motivo da consulta"
                        rows={3}
                    />
                    {errors.reason && (
                        <p className="text-red-400 text-sm mt-1">{errors.reason.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                    Agendar
                </button>
            </form>
        </div>
    );
}
