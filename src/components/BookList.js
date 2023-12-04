import { useContext } from "react"
import BookDetails from "./BookDetails"
import BooksContext from "../context/BooksContext";

const BookList = ({ books, onBookDeletion, onBookEdition }) => {
    const { count, incrementCount } = useContext(BooksContext);

    const handleBookDeletion = (id) => {
        onBookDeletion(id)
    }

    const handleBookEdition = (id, newTitle) => {
        onBookEdition(id, newTitle)
    }

    return (
        <div className="book-list">
            { count }
            <button onClick={incrementCount}>Click</button>
            { 
                books.map((book) => 
                    <BookDetails
                        key={book.id}
                        book={book}
                        onBookDeletion={handleBookDeletion}
                        onBookEdition={handleBookEdition} />
                )
            }
        </div>
    )
}

export default BookList