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
      <div className="text-center mb-2">
        <h2 className="text-orange-300">counter: {count}</h2>
        <button className="border rounded px-2 bg-green-500 mr-1.5" onClick={increase}>
          increase
        </button>
        <button className="border rounded px-2 bg-amber-400" onClick={decrease}>
          decrease
        </button>
        <button className="border rounded px-2 bg-red-500" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}
