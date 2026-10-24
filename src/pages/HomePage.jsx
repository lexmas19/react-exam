import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <main className="w-full max-w-md px-4 pb-10 flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-slate-700">მთავარი გვერდი</h2>

      <Counter />
    </main>
  );
}
