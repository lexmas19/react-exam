import { useDispatch } from "react-redux";

import { removeBook } from "../store/booksSlice";

export default function BookList({ books }) {
  const dispatch = useDispatch();
  if (books.length <= 0) {
    return (
      <>
        <h2 className="col-span-2 text-center text-slate-400 italic py-8">წიგნები არ მოიძებნა</h2>
      </>
    );
  }

  return (
    <>
      {books.map((book) => {
        return (
          <div className="col-span-2 grid grid-cols-[1fr_auto] items-center gap-x-4 bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow" key={book.id}>
            <p className="col-start-1 font-semibold text-slate-800">{book.title}</p>
            <p className="col-start-1 text-sm text-slate-500">ავტორი: {book.author}</p>
            <button className="col-start-2 row-start-1 row-span-2 rounded-lg px-3 py-1.5 text-sm text-red-600 border border-red-200 hover:bg-red-50 transition" onClick={() => dispatch(removeBook(book.id))}>
              წაშლა
            </button>
          </div>
        );
      })}
    </>
  );
}
