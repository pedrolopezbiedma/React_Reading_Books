import { useState } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]);

    const handleBookCreation = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title })
        setBooks([
           { ...books, ...response.data }
        ])
    }

    const handleBookEdition = (id, newTitle) => {
          setBooks([...books.map((book) => {
            if (book.id === id) {
              return { ...book, title: newTitle };
            }
      
            return book;
          })]);
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
            <h1>Reading List</h1>
            <BookCreate onBookCreation={handleBookCreation} />
            <BookList books={books} onBookDeletion={handleBookDeletion} onBookEdition={handleBookEdition}/>
        </div>
    )
}

export default App;