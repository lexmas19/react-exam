import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().trim().required("სახელი სავალდებულოა"),

  email: yup.string().trim().required("ელფოსტა სავალდებულოა").email("შეიყვანეთ სწორი ელფოსტა"),

  password: yup.string().required("პაროლი სავალდებულოა").min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold text-slate-700 mb-4">სტუდენტის რეგისტრაცია</h2>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600" htmlFor="name">სახელი</label>
          <input className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" id="name" type="text" {...register("name")} />
          <p className="text-sm text-red-500 min-h-5">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600" htmlFor="email">ელფოსტა</label>
          <input className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" id="email" type="email" {...register("email")} />
          <p className="text-sm text-red-500 min-h-5">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600" htmlFor="password">პაროლი</label>
          <input className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" id="password" type="password" {...register("password")} />
          <p className="text-sm text-red-500 min-h-5">{errors.password?.message}</p>
        </div>

        <button className="mt-2 rounded-lg py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition" type="submit">რეგისტრაცია</button>
      </form>
    </section>
  );
}
