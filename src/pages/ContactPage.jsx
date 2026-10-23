import RegisterForm from "../components/RegisterForm";
import useToggle from "../Hooks/useToggle";

export default function ContactPage() {
  const [isVisible, toggle] = useToggle();
  return (
    <main>
      <h2>კონტაქტი</h2>
      <p>Email: students@example.com</p>
      <div>
        {isVisible && <p>კეთილი იყოს თქვენი მობრძანება ბიბლიოთეკაში.</p>}
        <button className="border rounded px-2 bg-green-500 mr-1.5" onClick={toggle}>
          ჩვენება / დამალვა
        </button>
      </div>
      <RegisterForm />
    </main>
  );
}
