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
    <main>
      <h2>წიგნები</h2>

      <button onClick={handleAddBook}>წიგნის დამატება</button>

      <button onClick={() => dispatch(clearBooks())}>სიის გასუფთავება</button>

      <BookList books={books} onRemove={handleRemoveBook} />
    </main>
  );
}
