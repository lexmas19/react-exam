import RegisterForm from "../components/RegisterForm";
import useToggle from "../Hooks/useToggle";

export default function ContactPage() {
  const [isVisible, toggle] = useToggle();
  return (
    <main className="w-full max-w-md px-4 pb-10 flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-slate-700">კონტაქტი</h2>
      <p className="text-slate-500">Email: students@example.com</p>
      <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-start gap-3">
        {isVisible && <p className="text-slate-700">კეთილი იყოს თქვენი მობრძანება ბიბლიოთეკაში.</p>}
        <button className="rounded-lg px-4 py-1.5 bg-green-500 text-white font-medium hover:bg-green-600 active:scale-95 transition" onClick={toggle}>
          ჩვენება / დამალვა
        </button>
      </div>
      <RegisterForm />
    </main>
  );
}
