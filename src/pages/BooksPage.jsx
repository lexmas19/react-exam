import { useDispatch, useSelector } from "react-redux";
import BookList from "../components/BookList";
import { addBook, removeBook, clearBooks } from "../store/booksSlice";

export default function BooksPage() {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  function handleAddBook() {
    const newBook = {
      id: crypto.randomUUID(),
      title: "ახალი წიგნი",
      author: "ახალი ავტორი",
    };

    dispatch(addBook(newBook));
  }

  function handleRemoveBook(id) {
    dispatch(removeBook(id));
  }

  return (
    <main className="w-full max-w-2xl px-4 pb-10 grid grid-cols-2 gap-3">
      <h2 className="col-span-2 text-xl font-semibold text-slate-700">წიგნები</h2>

      <button className="rounded-lg py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition" onClick={handleAddBook}>წიგნის დამატება</button>

      <button className="rounded-lg py-2 bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 active:scale-95 transition" onClick={() => dispatch(clearBooks())}>სიის გასუფთავება</button>

      <BookList books={books} onRemove={handleRemoveBook} />
    </main>
  );
}
