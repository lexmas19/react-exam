import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("კომპონენტი ჩაიტვირთა");
  }, []);

  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="text-center mb-2 w-full bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">counter: {count}</h2>
        <button className="rounded-lg px-4 py-1.5 bg-green-500 text-white font-medium mx-1 hover:bg-green-600 active:scale-95 transition" onClick={increase}>
          increase
        </button>
        <button className="rounded-lg px-4 py-1.5 bg-amber-400 text-white font-medium mx-1 hover:bg-amber-500 active:scale-95 transition" onClick={decrease}>
          decrease
        </button>
        <button className="rounded-lg px-4 py-1.5 bg-red-500 text-white font-medium mx-1 hover:bg-red-600 active:scale-95 transition" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}
