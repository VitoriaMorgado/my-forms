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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-green-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-7 border border-blue-100"
            >
                <div className="flex flex-col items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mb-2">
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#38bdf8" />
                            <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-blue-900 mb-1 text-center">
                        Agendamento Médico
                    </h2>
                    <p className="text-blue-700 text-sm text-center">
                        Preencha os dados para marcar sua consulta
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
                        Nome do Médico
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

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-blue-900 font-semibold mb-1">
                            Data da Consulta
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
                    <div className="flex-1">
                        <label className="block text-blue-900 font-semibold mb-1">
                            Horário
                        </label>
                        <input
                            {...register("time")}
                            type="time"
                            className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                errors.time ? "border-red-400" : "border-blue-200"
                            }`}
                        />
                        {errors.time && (
                            <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-1">
                        Motivo da Consulta
                    </label>
                    <textarea
                        {...register("reason")}
                        className={`w-full px-4 py-2 border rounded-lg bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            errors.reason ? "border-red-400" : "border-blue-200"
                        }`}
                        placeholder="Descreva o motivo da consulta"
                        rows={3}
                    />
                    {errors.reason && (
                        <p className="text-red-500 text-xs mt-1">{errors.reason.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg hover:from-blue-600 hover:to-green-500 transition-colors font-bold text-lg shadow-md"
                >
                    Agendar Consulta
                </button>
            </form>
        </div>
    );
}
