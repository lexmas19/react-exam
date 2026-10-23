import { useDispatch } from "react-redux";

import { removeBook } from "../store/booksSlice";

export default function BookList({ books }) {
  const dispatch = useDispatch();
  if (books.length <= 0) {
    return (
      <>
        <h2>წიგნები არ მოიძებნა</h2>
      </>
    );
  }

  return (
    <>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>ავტორი: {book.author}</p>
            <button className="border px-2" onClick={() => dispatch(removeBook(book.id))}>
              წაშლა
            </button>
          </div>
        );
      })}
    </>
  );
}
