import BookDetails from "./BookDetails"

const BookList = ({ books, onBookDeletion }) => {
    const handleDeleteBook = (id) => {
        onBookDeletion(id)
    }

    return (
        <div className="book-list">
            { 
            books.map((book) => 
                <BookDetails key={book.id} book={book} onDeleteBook={handleDeleteBook} />
                ) 
            }
        </div>
    )
}

export default BookList