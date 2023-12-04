import { useEffect, useState } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]);

    // Initial books loading
    useEffect(() => {
       const fetchBooks = async () => {
            const response = await axios.get('http://localhost:3001/books')
            setBooks(response.data)
        }

        fetchBooks();
    }, [])
    
    const handleBookCreation = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title })
        setBooks([
           { ...books, ...response.data }
        ])
    }

    const handleBookEdition = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{ title: newTitle })

        setBooks([...books.map((book) => {
        if (book.id === id) {
            return { ...response.data };
        }
    
        return book;
        })]);
    }

    const handleBookDeletion = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

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