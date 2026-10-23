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
    <section>
      <h2>სტუდენტის რეგისტრაცია</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">სახელი</label>
          <input className="border-1" id="name" type="text" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">ელფოსტა</label>
          <input className="border-1" id="email" type="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">პაროლი</label>
          <input id="password" type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">რეგისტრაცია</button>
      </form>
    </section>
  );
}
