import { useContext, useEffect } from "react";

import BooksContext from "./context/BooksContext";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const { books, fetchBooks } = useContext(BooksContext)
    
    console.log('books is -->', books)
    
    // Initial books loading
    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate />
            <BookList books={books} />
        </div>
    )
}

export default App;