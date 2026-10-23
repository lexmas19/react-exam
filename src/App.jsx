import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useToggle from "./Hooks/useToggle";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const books = [
    { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
    { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი" },
    { id: 3, title: "მე, ბებია, ილიკო და ილარიონი", author: "ნოდარ დუმბაძე" },
  ];

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}
