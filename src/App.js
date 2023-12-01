import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]);

    const handleBookCreation = (title) => {
        setBooks([
            ...books, { id: parseInt(Math.random() * 9999 ), title}
        ])
    }

    const handleBookDeletion = (id) => {
        setBooks([
            ...books.filter((book) => {
                return book.id !== id;
              })
        ])
    }

    return (
        <div className="app">
            <BookCreate onBookCreation={handleBookCreation} />
            <BookList books={books} onBookDeletion={handleBookDeletion} />
        </div>
    )
}

export default App;